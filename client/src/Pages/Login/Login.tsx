import logo from '../../assets/images/logo.svg';
import { MdEmail } from "react-icons/md";

const Login = () => {
    return <div className="min-h-screen bg-gray-100 dark:bg-[#18181B] flex justify-center items-center ">
        <div className="lg:w-8/12 md:w-full bg-transparent lg:grid min-h-screen grid-cols-2 lg:p-10" >
            {/*Cover */}
            <div className="bg-[#008080] hidden lg:flex justify-center items-center rounded-tl-lg rounded-bl-lg shadow-lg shadow-[#00000012]">
                {/* Logo */}
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={logo} className='w-32' alt="Nolua Primary Government School" />
                    <h3 className='uppercase font-bold text-4xl text-white tracking-wider'>Welcome</h3>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-[#222831] rounded-tr-lg lg:p-6 flex justify-center items-center rounded-br-lg shadow-lg shadow-[#00000012] ">
                <div className=' w-full dark:bg-slate-800 '>
                    <form >
                        <div className='flex items-center w-full bg-gray-700 px-3 py-4 rounded-md'>
                            <span className='dark:bg-gray-500'><MdEmail className='text-3xl text-white ' /></span>
                            <input className='bg-transparent  w-full outline-none' type="email" name="email" id="email" placeholder='Enter your email' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Login