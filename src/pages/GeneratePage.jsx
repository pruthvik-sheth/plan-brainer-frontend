import { useState } from "react";

const GeneratePage = () => {

    const [inputImageURL, setInputImageURL] = useState(null)
    const [outputImageURL, setOutputImageURL] = useState(null)

    async function getBlob(file) {
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.onload = function (e) {
                resolve(e.target.result)
            };
            reader.readAsDataURL(file)
        });
    }

    async function inputImageHandler(e) {
        const file = e.target.files[0]
        const blob = await getBlob(file)
        setInputImageURL(blob)
    }

    async function submitHandler(e) {
        e.preventDefault();
        const file = e.target.elements.image.files[0]
        const formData = new FormData()
        formData.append('image', file)

        const res = await fetch('http://localhost:5000/model', {
            method: 'POST',
            body: formData
        });

        const data = await res.blob()
        const url = URL.createObjectURL(data)

        setOutputImageURL(url)
    }
  return (
      <div className="border border-gray-500 border-t-0 flex items-center justify-center">
          <div className='min-h-custom_1 flex flex-col items-center justify-center'>
              <h1 className="w-full text-center text-5xl font-black my-10">Generate Floor Plans!</h1>
              <div className="flex">
                  <div className="flex flex-col">
                      <div className="flex">
                          <div className="flex flex-col border border-gray-500 border-b-0">
                              {
                                  inputImageURL && (
                                      <div>
                                          <img className="max-w-md" src={inputImageURL} alt='User Input Image' />
                                          <h2 className="border-t border-gray-500 w-full text-center text-xl font-extrabold py-6">Input Image</h2>
                                      </div>
                                  )
                              }

                          </div>
                          <div className="flex flex-col border border-gray-500 border-l-0 border-b-0">
                              {
                                  outputImageURL && (
                                      <div className="flex flex-col">
                                          <img className="max-w-md" src={outputImageURL} alt='Model Generated Image' />
                                          <h2 className="border-t border-gray-500 w-full text-center text-xl font-extrabold py-6">Generated Image</h2>
                                      </div>
                                  )
                              }
                          </div>
                      </div>
                      <form onSubmit={submitHandler} className="flex flex-col">
                          <div className="p-6 border border-gray-500">
                              <label htmlFor="file-input" className="sr-only cursor-pointer">
                                  Choose file
                              </label>
                              <input
                                  onInput={inputImageHandler}
                                  type='file'
                                  accept='image/*'
                                  name='image'
                                  required
                                  className="file-input file-input-ghost w-full"
                              />
                          </div>
                          <div className="p-6 w-full border border-gray-500 border-t-0">
                              <button type="submit" className="btn btn-primary w-full">
                                  Generate
                              </button>
                          </div>
                      </form>
                  </div>
                  <div className="border border-gray-500 border-l-0">
                      <div className="px-10 h-full flex flex-col items-center justify-around">
                          <img className="w-40" src={outputImageURL} alt='Model Generated Image' />
                          <img className="w-40" src={outputImageURL} alt='Model Generated Image' />
                          <img className="w-40" src={outputImageURL} alt='Model Generated Image' />
                          <h2 className="text-center text-xl font-extrabold">Variants</h2>
                      </div>
                  </div>
              </div>
              
              
          </div>
      </div>
  )
}

export default GeneratePage