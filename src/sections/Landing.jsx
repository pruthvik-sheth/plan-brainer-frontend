import Tilt from '../components/Tilt'
import floor_image_1 from '../assets/floor_plans/fp_1.png'
import floor_image_2 from '../assets/floor_plans/fp_2.png'
import floor_image_3 from '../assets/floor_plans/fp_5.png'
import floor_image_4 from '../assets/floor_plans/fp_6.png'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

    const options = {
        speed: 1000,
        max: 12,
        perspective: 1200,
    };
    
    const navigate = useNavigate()
    return (
        <>
            {/* <div className='container max-w-screen-xl'>
                <div className="hero min-h-custom border border-gray-500">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <Tilt className="tilt max-w-xl" options={options}>
                            <img src={floor_image_1} alt="Dashboard"></img>
                            <div className="absolute top-0 start-0 tilt-inner">
                                <img src={floor_image_2} alt="Cards"></img>
                            </div>
                        </Tilt>
                        <div className='max-w-xl mr-20 p-8 rounded-sm'>
                            <h1 className="text-5xl font-black">Effortlessly design <br />your space with <br />the power of AI.</h1>
                            <p className="py-6">Design your dream space with precision and ease using our AI-powered floor planning technology. Get expertly crafted, custom floor plans that bring your vision to life..</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='container max-w-screen-xl'>
                <div className="hero min-h-custom border border-gray-500">
                    <div className="hero-content flex-col lg:flex-row">
                        <Tilt className="tilt max-w-xl" options={options}>
                            <img src={floor_image_1} alt="Dashboard"></img>
                            <div className="absolute top-0 start-0 tilt-inner">
                                <img src={floor_image_2} alt="Cards"></img>
                            </div>
                        </Tilt>
                        <div className='max-w-xl rounded-sm'>
                            <h1 className="text-5xl font-black">Creative Intelligence Built-In</h1>
                            <p className="py-6">Design your dream space with precision and ease using our AI-powered floor planning technology. Get expertly crafted, custom floor plans that bring your vision to life..</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='container border border-gray-500 border-t-0 flex items-center justify-center'>

                <div className='min-h-screen flex w-full flex-row-reverse'>
                    <div className='flex items-center justify-center w-1/2'>
                        <Tilt className="tilt max-w-xl" options={options}>
                            <img src={floor_image_3} alt="Dashboard"></img>
                            <div className="absolute top-0 start-0 tilt-inner">
                                <img src={floor_image_4} alt="Cards"></img>
                            </div>
                        </Tilt>
                    </div>
                    <div className='border-r border-gray-500 flex items-center justify-center w-1/2 p-10'>
                        <div className='max-w-xl rounded-sm'>
                            <h1 className="text-5xl font-black">Effortlessly design <br />your space with <br />the power of AI.</h1>
                            <p className="py-6">Design your dream space with precision and ease using our AI-powered floor planning technology. Get expertly crafted, custom floor plans that bring your vision to life..</p>
                            <button onClick={() => {navigate('/generate')}} className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container border border-gray-500 border-t-0 flex items-center justify-center'>

                <div className='min-h-screen flex w-full'>
                    <div className='flex items-center justify-center w-1/2'>
                        <Tilt className="tilt max-w-xl" options={options}>
                            <img src={floor_image_1} alt="Dashboard"></img>
                            <div className="absolute top-0 start-0 tilt-inner">
                                <img src={floor_image_2} alt="Cards"></img>
                            </div>
                        </Tilt>
                    </div>
                    <div className='border-l border-gray-500 flex items-center justify-center w-1/2 p-10'>
                        <div className='max-w-xl rounded-sm'>
                            <h1 className="text-5xl font-black">Creative Intelligence Built-In</h1>
                            <p className="py-6">Design your dream space with precision and ease using our AI-powered floor planning technology. Get expertly crafted, custom floor plans that bring your vision to life..</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing