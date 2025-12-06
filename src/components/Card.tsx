
function Card({src, alt, title, description, span }: {src?: string, alt?: string, title?: string, description?: string, span?: string}) { 
  return (
    
    <div className={`${span} border p-6 rounded-3xl flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 shadow-black/50 shadow-xl`}>
      <a href="/">
      <img src={src} alt={alt} className='rounded-3xl' />
      <h2 className='text-green-950 text-2xl font-bold mt-4 mb-2'>{title}</h2>
      <p className='text-green-900'>{description} </p>
      </a>
    </div>
    
  );
}

export default Card;