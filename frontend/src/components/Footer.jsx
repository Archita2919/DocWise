import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/*Left Section*/}
                <div>
                    <img className='mb-5 w-40' src={assets.main_logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>DocWise is an online doctor appointment booking system designed to connect patients with healthcare providers effortlessly. It simplifies scheduling, enabling patients to book appointments anytime, while allowing doctors to manage their schedules efficiently. With user-friendly features and secure data handling, DocWise enhances the healthcare experience for all users.</p>
                </div>

                {/*Middle Section*/}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li onClick={() => { navigate('/'); scrollTo(0, 0) }} className='cursor-pointer hover:text-primary'>Home</li>
                        <li onClick={() => { navigate('/about'); scrollTo(0, 0) }} className='cursor-pointer hover:text-primary'>About Us</li>
                        <li onClick={() => { navigate('/contact'); scrollTo(0, 0) }} className='cursor-pointer hover:text-primary'>Contact Us</li>
                        <li className='cursor-pointer hover:text-primary'>Privacy Policy</li>
                    </ul>
                </div>

                {/*Right Section*/}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='cursor-pointer'>+918958964523</li>
                        <li>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=docwisesupport@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer text-gray-600 hover:text-primary"
                            >
                                docwisesupport@gmail.com
                            </a>
                        </li>

                    </ul>
                </div>

            </div>

            {/*Copyright Section */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ DocWise - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer