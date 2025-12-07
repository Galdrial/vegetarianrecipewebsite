
function Card({src, alt, title, description}: {src?: string, alt?: string, title?: string, description?: string}) { 
  return (
    
    <div className="border   flex flex-col items-start text-center hover:scale-[1.04] transition-transform duration-300 shadow-black/50 shadow-xl ">
      <a href="/">
      <img src={src} alt={alt} className="w-full h-48 object-cover"  />
      <h2 className='text-green-950 text-2xl text-start  mx-6 font-bold mt-4 mb-2'>{title}</h2>
      <p className='text-green-900 mx-6 mb-4 text-start text-sm'>{description} </p>
      </a>
    </div>
    
  );
}

export default Card;