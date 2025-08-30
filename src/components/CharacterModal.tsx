import { useRef, useState } from "react"
import CharacterPlaceholder from "../assets/photo-placeholder.png";
import EditSvg from "../assets/edit.svg";
import UpdateCharacter from "./UpdateCharacter";
import NewCharacter from "./NewCharacter";

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

    const [isUpdatingCharater, setIsUpdatingCharacter] = useState<boolean>(true)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file) 
            setImage(imageUrl)
        }
    }

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const saveNewCharacter = () => {
        
    }
    
    return (
        <div
        className="absolute inset-0 flex items-center justify-center bg-black/40"
        onClick={() => onClickBack(false)}
        >
            <div
                className="bg-bh-dark-primary flex flex-col p-10 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()} 
            >
                <p
                onClick={() => onClickBack(false)}
                className="cursor-pointer text-bh-soft-white hover:text-bh-red mb-4"
                >
                {"<- Voltar"}
                </p>
                { isUpdatingCharater ? (
                    <div className="flex w-full justify-between h-10">
                        <select name="" id="" className="bg-bh-dark-secondary px-4 rounded-xl cursor-pointer h-full">
                            <option value="" disabled>Selecione o seu personagem...</option>
                            <option value="">Okushibo Kyuta</option>
                            <option value="">Beninho Hunter</option>
                        </select>
                        <div className="flex gap-3">
                            <button className="bg-bh-blue h-full px-5 rounded-xl cursor-pointer text-white transition-transform duration-200 hover:scale-110" onClick={() => setIsUpdatingCharacter(false)}>Novo</button>
                            <button className="bg-bh-dark-primary border-bh-red border-2 text-bh-red hover:text-white hover:bg-bh-red  cursor-pointer h-full px-5 rounded-xl transition-transform duration-200 hover:scale-110">Excluir</button>
                        </div>
                    </div>
                ) :
                (
                    <div className="flex w-full justify-end h-10">
                        <div className="flex gap-3">
                            <button className="bg-bh-dark-primary border-bh-red border-2 text-bh-red hover:text-white hover:bg-bh-red  cursor-pointer h-full px-5 rounded-xl transition-transform duration-200 hover:scale-110" onClick={() => setIsUpdatingCharacter(true)}>Cancelar</button>
                            <button className="bg-bh-dark-green h-full px-5 rounded-xl cursor-pointer text-white transition-transform duration-200 hover:scale-110" onClick={() => {
                                setIsUpdatingCharacter(true)
                                saveNewCharacter()
                                }}>Cadastrar</button>
                        </div>
                    </div>
                )}
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
                            className="w-full text-4xl font-bold focus:outline-none placeholder:text-white/20"
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
                            className="placeholder:text-white placeholder:opacity-20 text-xl font-light focus:outline-none"
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
                
                {
                    isUpdatingCharater ? 
                    <UpdateCharacter setIsConfirmModalActive={setIsConfirmModalActive} setPendingAction={setPendingAction} />
                    :
                    <>
                        <p className="text-sm">Campos não preenchidos serão considerados os valores padrões.</p>
                        <NewCharacter />
                    </>
                }
                
            </div>
        </div>
    )
}

export default CharacterModal