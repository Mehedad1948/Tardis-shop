import Link from 'next/link';

const Ad = () => {
  return (
    <Link   
      className='w-full h-14 block bg-[url("/images/ad.jpg")]'
      href='/browse'
    ></Link>
  );
};

export default Ad;
