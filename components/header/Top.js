import { MdSecurity } from 'react-icons/md';
import { RiAccountCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import Link from 'next/link';
import { useState } from 'react';
import UserMenu from './UserMenu';

const Top = ({ country }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  return (
    <div className='top '>
      <div className=' mx-auto flex items-center p-2 justify-between text-sm'>
        <div></div>
        <ul className='flex divide-x divide-slate-400 items-center'>
          <li className='header-li'>
            <img
              className='w-6 aspect-square rounded-full object-cover'
              src={country.flag}
              alt='Country'
            />
            <span>{country.name}</span>
          </li>
          <li className='group header-li'>
            <MdSecurity className='group-hover:fill-slate-900' />
            <Link href='/'>
              <span>Buyer Protextion</span>
            </Link>
          </li>
          <li className='header-li'>
            <Link href='/'>
              <span>Customer Service</span>
            </Link>
          </li>
          <li className='header-li'>
            <Link href='/'>
              <span>Help</span>
            </Link>
          </li>
          <li className='header-li'>
            <Link href='/'>
              <span>Whishist</span>
            </Link>
          </li>

          <li
            onMouseEnter={() => setShowMainMenu(true)}
            onMouseLeave={() => setShowMainMenu(false)}
            className='group relative header-li '
          >
            {loggedIn ? (
              <div className='flex items-center gap-2'>
                <img src='' alt='' />
                <span>Mehrdad</span>
                <RiArrowDropDownFill />
              </div>
            ) : (
              <div className='flex items-center gap-2'>
                <RiAccountCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            )}
            <UserMenu showMainMenu={showMainMenu} loggedIn={loggedIn} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
