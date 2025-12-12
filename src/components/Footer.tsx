// Footer component displays copyright and social links
import githubgreen from '../assets/img/github-green.png';
import linkedingreen from '../assets/img/linkedin-green.png';
import sitegreen from '../assets/img/site-green.png';
import SocialIcon from './SocialIcon';

function Footer() {
  return (
    // Footer navigation bar with copyright and social icons
    <nav className="w-full py-4 flex items-center justify-center flex-wrap gap-5 bg-white shadow-t" aria-label="Footer">
      {/* Copyright notice */}
      <p className='text-lime-700 text-center'>© 2025 Made with Passion by Simone Camerano</p>
      {/* Social media links */}
      <div className="flex justify-center" aria-label="Social links">
        <SocialIcon href='https://github.com/Galdrial' alt="GitHub" src={githubgreen} ariaLabel="GitHub profile" />
        <SocialIcon href='https://simonecamerano.dev' alt="Website" src={sitegreen} ariaLabel="Personal website" />
        <SocialIcon href='https://www.linkedin.com/in/simone-camerano/' alt="LinkedIn" src={linkedingreen} ariaLabel="LinkedIn profile" />
      </div>
    </nav>
  );
}

export default Footer;