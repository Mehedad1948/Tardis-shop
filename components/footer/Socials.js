import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsSnapchat,
} from 'react-icons/bs';
export default function Socials() {
  return (
    <div className=''>
      <section className=''>
        <h3>STAY CONNECTED</h3>
        <ul className='mt-2 flex items-center gap-4 text-slate-600 text-xl'>
          <li>
            <a href='/' target='_blank'>
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <BsPinterest />
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <BsSnapchat />
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
