import Ad from './Ad';
import Main from './Main';
import Top from './Top';

const Header = ({country}) => {
  return (
    <header className='h-full w-full shadow-custom  border-y '>
      <Ad />
      <Top country={country} />
      <Main />
    </header>
  );
};

export default Header;
