

function Search() {
  return (  
<div className="flex-1 min-w-[200px] mx-4 order-3 sm:order-none w-full">
  <div className="relative w-full">
    <input type="text" className="text-gray-700 rounded-full px-4 py-2 w-full pr-10 bg-white border border-gray-300" placeholder="Search..." />
    <button className="absolute bg-transparent inset-y-0 right-1 flex items-center cursor-pointer text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
      </svg>
    </button>
  </div>
</div>
  );
}

export default Search;