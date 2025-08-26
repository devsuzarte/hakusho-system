import { useRef, useState } from "react"
import CharacterPlaceholder from "../assets/photo-placeholder.png";
import EditSvg from "../assets/edit.svg";

interface CharacterModalParams {
    isOpen: boolean
    onClickBack: (isOpen: boolean) => void
    setPendingAction: (action: () => void) => void
    setIsConfirmModalActive: (isOpen: boolean) => void
}

function CharacterModal({ isOpen, setPendingAction, setIsConfirmModalActive, onClickBack }: CharacterModalParams) {
    if (!isOpen) return null

    const [name, setName] = useState("Nome do personagem")
    const [technique, setTechnique] = useState("Nome da Técnica")

    const [image, setImage] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const [editingField, setEditingField] = useState<null | "name" | "technique">(null)

    const handleActionWithConfirm = (action: () => void) => {
        setPendingAction(action)
        setIsConfirmModalActive(true)
    }

    // Quando o usuário escolhe uma imagem
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file) // cria uma URL temporária
            setImage(imageUrl)
        }
    }

    // Dispara o clique no input file
    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div
        className="absolute inset-0 flex items-center justify-center bg-black/40"
        onClick={() => onClickBack(false)}
        >
            <div
                className="bg-bh-dark-primary flex flex-col p-10 rounded-lg shadow-lg w-200"
                onClick={(e) => e.stopPropagation()} 
            >
                <p
                onClick={() => onClickBack(false)}
                className="cursor-pointer text-bh-soft-white hover:text-bh-red mb-4"
                >
                {"<- Voltar"}
                </p>
                <div className="flex w-full justify-between h-10">
                    <select name="" id="" className="bg-bh-dark-secondary px-4 rounded-xl cursor-pointer h-full">
                        <option value="" disabled>Selecione o seu personagem...</option>
                        <option value="">Okushibo Kyuta</option>
                        <option value="">Beninho Hunter</option>
                    </select>
                    <div className="flex gap-3">
                        <button className="bg-bh-blue h-full px-5 rounded-xl cursor-pointer text-white hover:bg-cyan-400 transition-transform duration-200 hover:scale-110">Novo</button>
                        <button className="bg-bh-dark-primary border-bh-red border-2 text-bh-red hover:text-white hover:bg-bh-red  cursor-pointer h-full px-5 rounded-xl transition-transform duration-200 hover:scale-110">Excluir</button>
                    </div>
                </div>
                <div className="flex gap-5 mt-10 items-center">
                    <div className="relative group cursor-pointer"  onClick={handleImageClick}>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <img
                            src={image ? image : CharacterPlaceholder}
                            alt="Personagem"
                            className="rounded-xl w-20 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <img src={EditSvg} alt="Editar" className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="w-full">
                        {editingField === "name" ? (
                            <input
                            className="bg-black/20 py-2 px-5 rounded-xl w-full text-4xl font-bold focus:outline-none placeholder:text-white placeholder:opacity-20"
                            placeholder={name}
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => setEditingField(null)} 
                            />
                        ) : (
                            <p
                            className="text-bh-soft-white text-4xl font-bold"
                            onClick={() => setEditingField("name")}
                            >
                            {name}
                            </p>
                        )}

                        {editingField === "technique" ? (
                            <input
                            className="bg-black/20 py-1 px-3 rounded-xl placeholder:text-white placeholder:opacity-20 text-xl font-light focus:outline-none"
                            placeholder={technique}
                            autoFocus
                            onChange={(e) => setTechnique(e.target.value)}
                            onBlur={() => setEditingField(null)}
                            />
                        ) : (
                            <p
                            className="text-bh-soft-white text-xl font-light"
                            onClick={() => setEditingField("technique")}
                            >
                            {technique}
                            </p>
                        )}
                    </div>
                </div>
                <hr className="my-5"/>
                <div className="mt-5">
                    <p className="text-xl font-semibold">INFORMAÇÕES</p>
                    <div className="flex gap-5">
                        <div className="mt-3 flex">
                            <input type="number" min="0" placeholder="exp" className="bg-black/20 rounded-l-lg pl-5 py-2 w-20 placeholder:text-white placeholder:opacity-20"/>
                            <button className="bg-black/50 rounded-r-lg px-5 py-2 hover:bg-bh-purple hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Adicionar</button>
                        </div>
                        <div className="mt-3 flex">
                            <input type="number" placeholder="100 ¥" className="bg-black/20 rounded-l-lg pl-5 py-2 w-20 placeholder:text-white placeholder:opacity-20"/>
                            <button className="bg-black/50 rounded-r-lg px-5 py-2 hover:bg-bh-yellow hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Depositar / Sacar</button>
                        </div>
                    </div>
                    <p className="text-xl font-semibold mt-10">DADOS</p>
                    <div className="flex gap-5 w-full flex-wrap mt-3">
                        <div className="flex">
                            <p className="bg-black/20 rounded-l-lg py-2 px-5 text-bh-soft-white">Vigor</p>
                            <button className="bg-black/50 rounded-r-lg px-5 py-2 hover:bg-bh-blue hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Up</button>
                        </div>
                        <div className="flex">
                            <p className="bg-black/20 rounded-l-lg py-2 px-5 text-bh-soft-white">Força</p>
                            <button className="bg-black/50 rounded-r-lg px-5 py-2 hover:bg-bh-blue hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Up</button>
                        </div>
                        <div className="flex">
                            <p className="bg-black/20 rounded-l-lg py-2 px-5 text-bh-soft-white">Presença</p>
                            <button className="bg-black/50 rounded-r-lg px-5 py-2 hover:bg-bh-blue hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Up</button>
                        </div>
                        <div className="flex">
                            <p className="bg-black/20 rounded-l-lg py-2 px-5 text-bh-soft-white">Agilidade</p>
                            <button className="bg-black/50 rounded-r-lg px-5 py-2 hover:bg-bh-blue hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Up</button>
                        </div>
                        <div className="flex">
                            <p className="bg-black/20 rounded-l-lg py-2 px-5 text-bh-soft-white">Inteligência</p>
                            <button className="bg-black/50 rounded-r-lg px-5 py-2 hover:bg-bh-blue hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Up</button>
                        </div>
                    </div>
                    <p className="text-xl font-semibold mt-10">ARQUÉTIPOS</p>
                    <div className="flex h-10 mt-3">
                        <select name="" id="" className="bg-bh-dark-secondary px-4 rounded-l-xl cursor-pointer h-full ">
                            <option value="" disabled><p className="text-white/20">Selecione um arquétipo...</p></option>
                            <option value="">Perpetrador</option>
                            <option value="">Insinuante</option>
                        </select>
                        <button className="bg-black/50 rounded-r-lg px-5 py-2 hover:bg-bh-pink hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Selecionar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterModal