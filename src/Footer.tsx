import githuborange from './assets/github-orange.png';

function Footer() {
  return (
    <nav className=" py-4 fixed bottom-0 w-full flex items-center justify-center flex-wrap gap-2 bg-green-500 border-t-2">
      <p className='text-green-950 text-center'>© 2025 Made with Passion by Simone Camerano</p>
      <a href="/"><img src={githuborange} alt="github link" className='w-10' /></a>
    </nav>
  );
}

export default Footer;