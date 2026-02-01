import { Hexagon } from 'lucide-react'

function Toast({ show, message }) {
  return (
    <div 
      className={`fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <span>{message}</span>
    </div>
  )
}

export default Toast
