import logo from '../../assets/images/logo.svg';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggler from '../../Components/Toggler/Toggler';


const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);



    return <div className="min-h-screen   bg-white dark:bg-slate-900 lg:bg-gray-100 lg:dark:bg-[#18181B] flex justify-center items-center ">

        <div className=" md:w-8/12  w-full bg-transparent grid min-h-screen lg:grid-cols-2 p-5 md:p-10" >
            {/*Cover */}
            <div className="bg-[#008080] hidden lg:flex justify-center items-center rounded-tl-lg rounded-bl-lg shadow-lg shadow-[#00000012]">
                {/* Logo */}
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={logo} className='w-32' alt="Nolua Primary Government School" />
                    <h3 className='uppercase font-bold text-4xl text-white tracking-wider'>Welcome</h3>
                </div>
            </div>

            {/* Form */}
            <div className="bg-transparent relative lg:bg-white lg:dark:bg-[#222831] rounded-tr-lg  lg:p-5 flex flex-col justify-center items-center rounded-br-lg lg:shadow-lg shadow-[#00000012] ">

                <div className="absolute md:hidden lg:block right-4 top-4" >
                    <Toggler size={24} />
                </div>


                <div className=' w-full relative md:bg-gray-100 md:dark:bg-gray-900 md:p-6 rounded-md '>
                    <div className='lg:hidden mb-6'>
                        <img src={logo} className='w-20 mx-auto' alt="Nolua Primary Government School" />
                    </div>
                    <div className="absolute hidden md:block lg:hidden right-4 top-4" >
                        <Toggler size={24} />
                    </div>
                    <form >

                        <div className='mb-5'>
                            <label htmlFor="email" className='font-semibold text-black dark:text-white text-sm mb-2 block'>Email</label>
                            <div className='flex items-center w-full bg-gray-200 dark:bg-gray-700 px-3  rounded-md '>
                                <span ><MdEmail className='text-xl text-gray-600 dark:text-white ' /></span>
                                <input className='bg-transparent text-sm text-black dark:text-white font-medium placeholder:font-normal py-3 px-2  w-full outline-none' type="email" name="email" id="email" placeholder='example@email.com' />
                            </div>
                        </div>

                        <div >
                            <label htmlFor="password" className='font-semibold text-black dark:text-white text-sm mb-2 block'>Password</label>
                            <div className='flex items-center w-full gap-2 bg-gray-200 dark:bg-gray-700 px-3  rounded-md '>
                                <span ><RiLockPasswordFill className='text-xl text-gray-600 dark:text-white ' /></span>
                                <input className='bg-transparent text-sm text-black dark:text-white font-medium placeholder:font-normal py-3  w-full outline-none' type={passwordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter password' />
                                <span onClick={() => setPasswordVisible(!passwordVisible)} className='text-xl text-gray-400 cursor-pointer' >{passwordVisible ? <IoEye /> : <IoEyeOff />}</span>
                            </div>
                        </div>

                        <p className='my-3 text-[12px] font-medium cursor-pointer select-none text-black dark:text-white hover:underline'>Forgot your password?</p>

                        <div className='mt-5'>
                            <input className='w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 transition-colors duration-200 py-3 text-sm rounded-md text-white font-semibold cursor-pointer' type="submit" value="Login" />
                        </div>

                    </form>
                    <p className='text-center mt-3 text-[13px] text-black dark:text-white font-semibold'>Don't have an account? <Link className='underline hover:opacity-90' to="/">Register.</Link></p>
                </div>
            </div>
        </div>
    </div>
}

export default Login