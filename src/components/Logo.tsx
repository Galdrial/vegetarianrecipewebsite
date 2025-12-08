import { Link } from 'react-router-dom';

function Logo({ href, alt, text, src }: { href: string; alt: string; text: string; src: string }) {
  return (
    <Link to={href} className="flex items-center min-w-max">
      <img src={src} alt={alt} className="w-10 inline" />
      <span className="font-playwrite text-2xl text-lime-700">{text}</span>
    </Link>
  );
}

export default Logo;