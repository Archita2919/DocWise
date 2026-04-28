import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [state, setState] = useState('Admin')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const { setAToken } = useContext(AdminContext)
    const { setDToken } = useContext(DoctorContext)

    const navigate = useNavigate();


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // api call
        if (state === 'Admin') {

            const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
            if (data.success) {
                setAToken(data.token)
                localStorage.setItem('atoken', data.token)
                //navigate('/admin/Dashboard');
            } else {
                toast.error(data.message)
            }

        } else {

            const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
            if (data.success) {
                setDToken(data.token)
                localStorage.setItem('dToken', data.token)
                //navigate('/admin/Dashboard');
            } else {
                toast.error(data.message)
            }
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'><span className='text-blue-700'> {state} </span> Login </p>
                <div className='w-full'>
                    <p className='text-black'>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full'>
                    <p className='text-black'>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                <button onClick={() => navigate('/admin-dashboard')} className='bg-blue-700 text-white w-full py-2 rounded-md text-base cursor-pointer'>Login</button>
                {
                    state === 'Admin'
                        ? <p className='text-black'>Doctor Login? <span className='text-blue-700 underline cursor-pointer' onClick={() => setState('Doctor')}>Click Here</span></p>
                        : <p className='text-black'>Admin Login? <span className='text-blue-700 underline cursor-pointer' onClick={() => setState('Admin')}>Click Here</span></p>
                }
            </div>
        </form>
    )
}

export default Login

