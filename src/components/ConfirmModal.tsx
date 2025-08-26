import SaveSvg from "../assets/save.svg"
import { useState, useEffect } from "react"

interface ConfirmModalParams {
  isOpen: boolean
  onClickBack: (isOpen: boolean) => void
  handle: () => void
}

const DURATION = 300 

function ConfirmModal({ isOpen, onClickBack, handle }: ConfirmModalParams) {
  const [mounted, setMounted] = useState(isOpen)   
  const [open, setOpen] = useState(false)          

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setOpen(true))
      })
    } else {
      setOpen(false)
      const t = setTimeout(() => setMounted(false), DURATION)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-black/40
                  transition-opacity duration-${DURATION}
                  ${open ? "opacity-100" : "opacity-0"}`}
      onClick={() => onClickBack(false)}
    >
      <div
        className={`bg-bh-dark-primary flex flex-col p-6 rounded-xl shadow-lg w-125
                    transform transition-transform duration-${DURATION}
                    ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p
          onClick={() => onClickBack(false)}
          className="cursor-pointer text-bh-soft-white hover:text-bh-red mb-4"
        >
          {"<- Voltar"}
        </p>

        <div className="w-full">
          <p className="text-2xl font-bold">CONFIRMAR</p>
          <p className="font-light">Você tem certeza das alterações?</p>
        </div>

        <div className="w-full flex justify-end mt-5">
          <button
            className="bg-bh-dark-green rounded-xl py-2 px-5 flex items-center gap-3 cursor-pointer hover:bg-green-600 transition-transform duration-200 hover:scale-110"
            onClick={() => {
              onClickBack(false)
              handle()
            }}
          >
            <img src={SaveSvg} alt="Save Icon" className="h-4" />
            <span className="font-semibold">Salvar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
