import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.main_logo} alt="" />

      {/* Desktop Links */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      {/* Right Side Controls */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 h-8 rounded-full object-cover shrink-0' src={userData.image} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-black-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-200 rounded flex flex-col gap-2 p-2'>
                <p onClick={() => navigate('my-profile')} className='hover:underline underline-offset-4 cursor-pointer'>{t('My Profile')}</p>
                <p onClick={() => navigate('my-appointments')} className='hover:underline underline-offset-4 cursor-pointer'>{t('My Appointments')}</p>
                <p onClick={logout} className='hover:underline underline-offset-4 cursor-pointer'>{t('Logout')}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="gap-3 hidden md:flex">
            <button onClick={() => navigate('/login')} className='border bg-primary text-white px-6 py-2 rounded-full font-light'>
              <b>{t('login')}</b>
            </button>
            <button onClick={() => navigate('/register')} className='bg-primary text-white px-6 py-2 rounded-full font-light'>
              <b>{t('create_account')}</b>
            </button>
          </div>
        )}

        {/* Language Switcher Dropdown */}
        <select
          onChange={handleLanguageChange}
          value={i18n.language}
          className="border rounded px-2 py-1 text-sm hidden md:block"
        >
          <option value="en">EN</option>
          <option value="hi">हिन्दी</option>
        </select>

        {/* Mobile Menu Icon */}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* Mobile Menu */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.main_logo} alt="" />
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
            <NavLink onClick={() => setShowMenu(false)} to='/'> <p className='px-4 py-2 rounded inline-block'>{t('home')}</p> </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'> <p className='px-4 py-2 rounded inline-block'>{t('doctors')}</p> </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'> <p className='px-4 py-2 rounded inline-block'>{t('about')}</p> </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'> <p className='px-4 py-2 rounded inline-block'>{t('contact')}</p> </NavLink>
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className="mt-3 border rounded px-2 py-1 text-sm"
            >
              <option value="en">EN</option>
              <option value="hi">हिन्दी</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
