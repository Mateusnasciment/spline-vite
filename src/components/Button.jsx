import React from 'react'

const Button = ({ title, Icon }) => {
  return (
    <button className="relative backdrop-blur-md bg-black/10 hover:scale-105 duration-500 transition-all inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-2xl shadow-2xl group">
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-tr from-[#004CF5]/90 to-[#E044DE]/90 backdrop-blur-xl group-hover:opacity-100" />
      <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/50 to-transparent opacity-5 h-1/3" />
      <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/50 to-transparent opacity-5" />
      <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white/50 to-transparent opacity-5" />
      <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white/50 to-transparent opacity-5" />
      <span className="absolute inset-0 w-full h-full border border-gray-500/40 drop-shadow-lg rounded-2xl" />
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5" />
      <span className="flex items-center z-50 justify-center gap-4 text-white">
        {Icon && <Icon className="w-5 h-5" />}
        {title}
      </span>
    </button>
  )
}

export default Button
