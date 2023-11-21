import Copyright from './Copyright';
import Links from './Links';
import NewsLetter from './NewsLetter';
import Payment from './Payment';
import Socials from './Socials';

const Footer = ({ country }) => {
  return (
    <din className=' h-fit block bg-slate-100 min-h-fit w-full fixed bottom-0 right-0'>
      <div className='relative w-full grid lg:grid-cols-2 gap-y-8
                      mx-auto max-w-8xl gap-x-12 p-4 sm:p-6'>
        <Links />
        <div className='flex flex-col gap-8 lg:gap-6 justify-between h-full lg:row-span-2 '>
          <NewsLetter />
          <Socials />
        </div>
        <div className='lg:col-span-2 grid grid-cols-2  justify-between flex-wrap'>
          <Copyright country={{ name: country.name }} />
          <Payment />
        </div>
      </div>
    </din>
  );
};

export default Footer;
