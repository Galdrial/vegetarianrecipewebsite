import SocialIcon from './SocialIcon';
import githuborange from '../assets/github-orange.png';
import siteorange from '../assets/site-orange.png';
import linkedinorange from '../assets/linkedinorange.png';

function Footer() {
  return (
    <nav className=" py-4 sticky bottom-0 w-full flex items-center justify-center flex-wrap gap-5 bg-green-300 border-t-2">
      <p className='text-green-950 text-center'>© 2025 Made with Passion by Simone Camerano</p>
      <div className="flex justify-center">
      <SocialIcon href='https://github.com/Galdrial' alt="GitHub" src={githuborange} />
      <SocialIcon href='https://simonecamerano.dev' alt="Website" src={siteorange} />
      <SocialIcon href='https://www.linkedin.com/in/simone-camerano/' alt="LinkedIn" src={linkedinorange} />
      </div>
    </nav>
  );
}

export default Footer;