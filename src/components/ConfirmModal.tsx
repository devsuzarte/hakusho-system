import SaveSvg from "../assets/save.svg";

interface ConfirmModalParams {
    isOpen: boolean
    onClickBack: (isOpen: boolean) => void
    handle: () => void
}

function ConfirmModal({ isOpen, onClickBack, handle }: ConfirmModalParams) {
    if (!isOpen) return null

    return (
        <div 
            className="absolute inset-0 flex items-center justify-center bg-black/40"
            onClick={() => onClickBack(false)}
        >
            <div
                className="bg-bh-dark-primary flex flex-col p-6 rounded-xl shadow-lg w-125"
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
                    <div className="bg-bh-dark-green rounded-xl py-2 px-5 flex items-center gap-3 cursor-pointer hover:bg-green-600 transition-transform duration-200 hover:scale-110" onClick={() => {
                        onClickBack(false)
                        handle()
                    }}>
                        <img src={SaveSvg} alt="Save Icon" className="h-4" />
                        <p className="font-semibold">Salvar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal