import { Link } from 'react-router-dom';

function Card( { src, alt, title, instructions, id }: { src?: string, alt?: string, title?: string, instructions?: string, id?: string } ) {
  // Determine the origin from the pathname
  const from = window.location.pathname === '/search' ? 'search' : 'random';
  return (
    <Link to={`/detail/${ id }`} state={{ from }}>
      <div className="rounded-lg flex flex-col text-center hover:scale-[1.04] transition-transform duration-300 shadow-black/25 shadow-xl h-80 sm:h-96" id={id}>


        <div className="w-full h-48 flex items-center justify-center bg-white rounded-t-lg overflow-hidden">
          <img src={src} alt={alt} className="w-full object-cover rounded-t-lg" />
        </div>
        <h2 className='text-lime-700 text-2xl text-center  mx-6 font-bold mt-4 mb-2'>{title}</h2>
        <p className='text-green-900 mx-6 mb-4 text-start text-sm'>{instructions} </p>
      </div>
    </Link >
  );
}

export default Card;