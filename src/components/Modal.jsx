import { RiCloseLine } from "react-icons/ri";

const Modal = ({ children, open, setOpen, onClose, width = "md:w-5/12" }) => {
  return (
    <div className='relative'>
      {/* Overlay */}
      <div 
        className={`fixed top-0 left-0 ${open ? "scale-y-100" : "scale-y-0"} z-20 w-full h-screen bg-overlay transition-all`}
        onClick={onClose}
      ></div>

      <div className={`fixed z-50 ${width} w-full p-2 top-1/2 -translate-y-1/2 -translate-x-1/2 ${open ? "scale-y-100" : "scale-y-0"} bg-[#306ba5] rounded-md shadow-md  left-1/2 transition-all`}>
        <button type="button" className="mt-2 mr-2" onClick={onClose}>
          <RiCloseLine fontSize={28} className="text-red-500" />
        </button>
        <div className="p-4 pt-0 text-white">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal