

function Navlink({href, text}: {href: string; text: string}) {
  return (
    <a href={href} className="flex items-center min-w-max ml-auto">
      <button className="rounded-full bg-slate-300 p-1">
        <span className="text-green-950 font-bold font-serif italic text-lg p-2">{text}</span>
      </button>
    </a>
      )
  }

export default Navlink;