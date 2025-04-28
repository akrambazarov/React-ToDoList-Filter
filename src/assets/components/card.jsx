import { useState } from 'react';
import BurgerMore from '../icons/burgerMore'
import Button from './Button'
import Edit from '../icons/edit'
import Trash from '../icons/trash'
import User from '../icons/user'
const Card = ({name,email,status,phone,img,city,onClick,onDelete,onEdit,themeCard}) => {
  const [controlModal, setControlModal] = useState(false);

  return (
    <div className={`grid relative grid-cols-1 md:grid-cols-12 gap-4 py-4 px-4  transition-colors
    ${themeCard === true ? 'bg-[#292929] hover:bg-[#34383f] ':' hover:bg-[#d1e2ff] '}`}>
    <div className="col-span-4 flex items-center gap-3">
      <img src={img} alt="Jacob" className="w-10 h-10 rounded-full object-cover" />
      <div>
        <div className={`font-medium  ${themeCard === true ?'text-amber-50':'text-gray-800'}`}>{name}</div>
        <div className={`text-sm  ${themeCard === true ?'text-[#dddddd]':'text-gray-500'}`}>{email}</div>
      </div>
    </div>
    <div className={`col-span-2 flex items-center  ${themeCard === true ?'text-amber-50':'text-gray-800'}`}>{city}</div>
    <div className="col-span-2 flex items-center">
      <span
      className={`px-3 py-1 text-xs font-medium rounded  
        ${status === 'ACTIVE'?
          "bg-[#dcf6e5] text-green-900 ":"bg-[#ffb8b8] text-[#ec595a]"}`}
      >{status}</span>
    </div>
    <div className={`col-span-3 flex items-center ${themeCard === true ?'text-amber-50':'text-gray-800'}`}>{phone}</div>
    <div className="col-span-1 flex items-center justify-end">
      <button 
        onClick={()=>{ setControlModal(!controlModal)}}
      className={`p-1 rounded-full  text-gray-400 hover:text-gray-600 
        ${themeCard === true ? "hover:bg-[#ffffff]": "hover:bg-gray-200"}`}>
        <BurgerMore 
        alt="⋮" 
        className="w-[18px] h-[18px]" />
      </button>
    </div>
    {/* controlModal */}
    {controlModal === true ?(
        <div className={`absolute h-[140px] z-20 flex flex-col gap-2 shadow-2xl right-10 w-[11rem] rounded-md 
          ${themeCard === true 
            ? 'bg-[#333333] text-gray-300' 
            : 'bg-white text-zinc-600'
        }`}
        >
      <Button
      onClick={()=>{
        onClick()
        setControlModal(false);
      }}
      icon={<User/>} 
      text="View Profile" 
      className=" hover:bg-blue-500 hover:text-white"/>
      <Button 
      onClick={()=>{
        setControlModal(false);
        onEdit()
      }}
      icon={<Edit/>} 
      text="Edit" 
      className=" hover:bg-blue-500 hover:text-white"/>
      <Button
      onClick={()=>onDelete()} 
      icon={<Trash/>} 
      text="Trash" 
      className="border-t-1 border-t-gray-600 rounded-none text-red-500 font-semibold hover:border-white transition-all duration-300 hover:bg-red-400 hover:text-white"/>
    </div>
    ):null}

  </div>
  )
}

export default Card