import { RiSearchLine } from 'react-icons/ri';
import { FaOpencart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Main = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  return (
    <div className='flex items-center justify-center px-4 py-3'>
      <div className='flex items-center grow gap-3  max-w-2xl'>
        <Link href='/'>
          <img className='w-32 shrink-0' src='/logo.png' alt='' />
        </Link>
        <div className='grow flex items-center h-8'>
          <input
            className='border grow inline-block focus:outline-none
             bg-slate-50 h-full p-1 text-slate-600 rounded-l-md'
            type='text'
            placeholder='Search...'
          />
          <div
            className='aspect-square h-8 px-2 w-fit flex items-center justify-center rounded-r-md
           bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
          >
            <RiSearchLine />
          </div>
        </div>
        <Link className='flex relative' href='/cart'>
          <FaOpencart className='w-8 text-lg' />
          <span className='absolute right-0 translate-x-1/2 bottom-1/2 w-5 h-5 text-sm
          bg-blue-600 text-white aspect-square rounded-full flex items-center justify-center
          '>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Main;
