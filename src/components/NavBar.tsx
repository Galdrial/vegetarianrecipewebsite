import Navlink from './NavLink';
import Search from './Search';
import carrot from '../assets/carrot.png';
import Logo from './Logo';



function Navbar() {
  return (
    <nav className="border-b-2 py-4 px-4 xl:px-[20vw] sticky top-0 w-full bg-green-300 z-50">
      <div className="flex items-center w-full gap-4 flex-wrap">

        <Logo href='/' alt="Carrot" text="Green Eats" src={carrot} />

        <Search />

        <Navlink href="/" text="Our Vision" />
       
      </div>
    </nav>
  );
}

export default Navbar;
