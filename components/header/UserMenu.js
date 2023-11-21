import Link from 'next/link';
import LinkButton from '../atoms/buttons/link-button';

const UserMenu = ({ loggedIn, showMainMenu }) => {
  return (
    <div
      className={`w-64 min-w-fit shadow-custom absolute top-full right-0 bg-white 
                  flex flex-col gap-2.5 px-1 py-2 items-center rounded-md opacity-0
                  transition-all duration-200 overflow-visible z-20
                  ${
                    showMainMenu
                      ? 'opacity-100 translate-y-4 pointer-events-auto'
                      : ' pointer-events-none'
                  }
                  `}
    >
      <div className='w-full h-8  absolute -top-8'>
      
      </div>
      <h4>Welcome to Shoppay</h4>
      {loggedIn ? (
        <div className='flex gap-3 items-center w-full '>
          <img
            className='rounded-full object-cover border-2 border-slate-200 w-16 aspect-square'
            src='https://cdn1.iconfinder.com/data/icons/professional-avatars-4/64/programmer-programming-developer-designer-avatar-512.png'
            alt=''
          />
          <div className='flex flex-col gap-1'>
            <span className='text-sm'>Welcome Back,</span>
            <h3 className='text-lg font-semibold text-slate-800'>Mehrdad</h3>
            <span className='text-sm text-blue-600'>Sign out</span>
          </div>
        </div>
      ) : (
        <div className='flex items-center gap-2'>
          <LinkButton>Register</LinkButton>
          <LinkButton style='white'>Login</LinkButton>
        </div>
      )}
      <ul className='flex flex-col gap-1 w-full'>
        <li className='py-1 w-full hover:bg-slate-50 px-2'>
          <Link className='w-full inline-block' href='/profile'>Account</Link>
        </li>
        <li className='py-1 w-full hover:bg-slate-50 px-2'>
          <Link className='w-full inline-block' href='/profile/orders'>My Order</Link>
        </li>
        <li className='py-1 w-full hover:bg-slate-50 px-2'>
          <Link className='w-full inline-block' href=''>Message Center</Link>
        </li>
        <li className='py-1 w-full hover:bg-slate-50 px-2'>
          <Link className='w-full inline-block' href=''>Address</Link>
        </li>
        <li className='py-1 w-full hover:bg-slate-50 px-2'>
          <Link className='w-full inline-block' href=''>WhishList</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
