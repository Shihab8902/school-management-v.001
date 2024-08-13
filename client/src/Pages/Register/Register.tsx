import logo from '../../assets/images/logo.svg';
import { MdEmail, MdOutlineNumbers } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Toggler from '../../Components/Toggler/Toggler';
import { FaUser } from 'react-icons/fa';
import { UserContext } from '../../Context/AuthProvider';
import { useForm, SubmitHandler } from "react-hook-form"




const Register = () => {

    //States
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [accountType, setAccountType] = useState('');


    //Handle user registration

    //Initial setups
    const { user, createUser } = useContext(UserContext);
    type Inputs = {
        fullName: string
        email: string,
        accountType: string,
        teacherID: string,
        studentID: string,
        password: string

    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)







    return <div className="min-h-screen   bg-white dark:bg-slate-900 lg:bg-gray-100 lg:dark:bg-[#18181B] flex justify-center items-center ">

        <div className=" md:w-8/12  container w-full bg-transparent grid min-h-screen lg:grid-cols-2 p-5 md:p-10" >

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

                <div className="absolute md:hidden lg:block right-1 top-1" >
                    <Toggler size={24} />
                </div>
                <div className=' w-full relative md:bg-gray-100 md:dark:bg-gray-900 md:p-6 rounded-md '>
                    <div className='lg:hidden mb-6'>
                        <img src={logo} className='w-20 mx-auto' alt="Nolua Primary Government School" />
                    </div>
                    <div className="absolute hidden md:block lg:hidden right-4 top-4" >
                        <Toggler size={24} />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Full name */}
                        <div className='mb-5'>
                            <label htmlFor="Name" className='font-semibold text-black dark:text-white text-sm mb-2 block'>Full Name</label>
                            <div className='flex items-center w-full bg-gray-200 dark:bg-gray-700 px-3  rounded-md '>
                                <span ><FaUser className='text-xl text-gray-600 dark:text-white ' /></span>
                                <input className='bg-transparent text-sm text-black dark:text-white font-medium placeholder:font-normal py-3 px-2  w-full outline-none' type="text" {...register("fullName", { required: true, minLength: 2, })} name="name" id="name" placeholder='Enter your full name' />
                            </div>
                        </div>

                        {/* Email */}
                        <div className='mb-5'>
                            <label htmlFor="email" className='font-semibold text-black dark:text-white text-sm mb-2 block'>Email</label>
                            <div className='flex items-center w-full bg-gray-200 dark:bg-gray-700 px-3  rounded-md '>
                                <span ><MdEmail className='text-xl text-gray-600 dark:text-white ' /></span>
                                <input className='bg-transparent text-sm text-black dark:text-white font-medium placeholder:font-normal py-3 px-2  w-full outline-none' type="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} name="email" id="email" placeholder='example@email.com' />
                            </div>
                        </div>

                        {/* Account type */}
                        <div className='mb-5'>
                            <label htmlFor="accountType" className='font-semibold text-black dark:text-white text-sm mb-2 block'>Account Type</label>
                            <div className='flex items-center w-full bg-gray-200 dark:bg-gray-700   rounded-md '>
                                <select className='bg-transparent dark:bg-gray-700 cursor-pointer text-sm rounded-md text-black dark:text-white font-medium placeholder:font-normal py-3 px-2  w-full outline-none' defaultValue="" {...register("accountType", { required: true })} onChange={(e) => setAccountType(e.target.value)} name="accountType" id="accountType">
                                    <option value="" disabled>Select an account type</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                        </div>


                        {/* Id */}
                        {
                            accountType === "Teacher" && <div className='mb-5'>
                                <label htmlFor="id" className='font-semibold text-black dark:text-white text-sm mb-2 block'>Teacher ID</label>
                                <div className='flex items-center w-full bg-gray-200 dark:bg-gray-700 px-3 rounded-md '>
                                    <span ><MdOutlineNumbers className='text-xl text-gray-600 dark:text-white ' /></span>
                                    <input className='bg-transparent text-sm text-black dark:text-white font-medium placeholder:font-normal py-3 px-2  w-full outline-none' type="text" {...register("teacherID", { required: true })} name="teacherId" id="teacherId" placeholder='Enter teacher id' />
                                </div>
                            </div>

                        }



                        {/* Id */}
                        {
                            accountType === "Student" && <div className='mb-5'>
                                <label htmlFor="id" className='font-semibold text-black dark:text-white text-sm mb-2 block'>Student ID</label>
                                <div className='flex items-center w-full bg-gray-200 dark:bg-gray-700 px-3 rounded-md '>
                                    <span ><MdOutlineNumbers className='text-xl text-gray-600 dark:text-white ' /></span>
                                    <input className='bg-transparent text-sm text-black dark:text-white font-medium placeholder:font-normal py-3 px-2  w-full outline-none' type="text" {...register("studentID", { required: true })} name="studentId" id="studentId" placeholder='Enter student id' />
                                </div>
                            </div>

                        }



                        {/* Password */}
                        <div >
                            <label htmlFor="password" className='font-semibold text-black dark:text-white text-sm mb-2 block'>Password</label>
                            <div className='flex items-center w-full gap-2 bg-gray-200 dark:bg-gray-700 px-3  rounded-md '>
                                <span ><RiLockPasswordFill className='text-xl text-gray-600 dark:text-white ' /></span>
                                <input className='bg-transparent text-sm text-black dark:text-white font-medium placeholder:font-normal py-3  w-full outline-none' type={passwordVisible ? "text" : "password"} {...register("password", { required: true, pattern: /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/ })} name="password" id="password" placeholder='Enter password' />
                                <span onClick={() => setPasswordVisible(!passwordVisible)} className='text-xl text-gray-400 cursor-pointer' >{passwordVisible ? <IoEye /> : <IoEyeOff />}</span>
                            </div>
                        </div>





                        <div className='mt-5'>
                            <input className='w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 transition-colors duration-200 py-3 text-sm rounded-md text-white font-semibold cursor-pointer' type="submit" value="Register" />
                        </div>

                    </form>
                    <p className='text-center mt-3 text-[13px] text-black dark:text-white font-semibold'>Already have an account? <Link className='underline hover:opacity-90' to="/login">Login.</Link></p>
                </div>
            </div>
        </div>
    </div>
}

export default Register