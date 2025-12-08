

import { Link } from 'react-router-dom';

function Navlink({href, text}: {href: string; text: string}) {
  return (
    <Link to={href} className="flex items-center min-w-max ml-auto">
      <span className="text-lime-700 font-sans text-lg p-2 hover:underline decoration-2 hover:underline-offset-4">{text}</span>
    </Link>
  );
}

export default Navlink;