import Logo from './Logo';
import Navlink from './Navlink';
import Search from './Search';
import carrot from './assets/carrot.png';



function Navbar() {
  return (
    <nav className="border-b-2 p-4 fixed top-0 w-full bg-green-500 z-50">
      <div className="flex items-center w-full gap-4 flex-wrap">

        <Logo href='/' alt="Carrot" text="Green Eats" src={carrot} />

        <Search />

        <Navlink href="/" text="Our Vision" />
       
      </div>
    </nav>
  );
}

export default Navbar;
