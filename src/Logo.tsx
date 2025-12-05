
     

function Logo({ href, alt, text, src }: { href: string; alt: string; text: string; src: string }) {
  return (
    <a href={href} className="flex items-center min-w-max">
      <img src={src} alt={alt} className="w-10 inline" />
      <span className="text-green-950 font-bold font-serif italic text-3xl hover:text-orange-500 align-middle">{text}</span>
    </a>
  );
}

export default Logo;