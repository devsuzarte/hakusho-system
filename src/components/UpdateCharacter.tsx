interface UpdateCharacterParams {
    setPendingAction: (action: () => void) => void
    setIsConfirmModalActive: (isOpen: boolean) => void
}

function UpdateCharacter({ setIsConfirmModalActive, setPendingAction }: UpdateCharacterParams) {
    const handleActionWithConfirm = (action: () => void) => {
        setPendingAction(action)
        setIsConfirmModalActive(true)
    }
    
    return (
        <div className="mt-5 overflow-y-scroll scrollbar-hide max-h-80">
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
            <p className="text-xl font-semibold mt-10">MODIFICADORES</p>
            <div className="flex gap-5">
                <div className="mt-3 flex">
                    <input type="number" placeholder="q.v" className="bg-black/20 rounded-l-lg pl-5 py-2 w-20 placeholder:text-white placeholder:opacity-20"/>
                    <button className="bg-black/50 px-5 py-2 hover:bg-bh-dark-green hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Aplicar</button>
                    <p className="rounded-r-lg px-3 py-2 bg-bh-dark-secondary text-white">+30</p>
                </div>
                <div className="mt-3 flex">
                    <input type="number" placeholder="q.e.e" className="bg-black/20 rounded-l-lg pl-5 py-2 w-20 placeholder:text-white placeholder:opacity-20"/>
                    <button className="bg-black/50 px-5 py-2 hover:bg-bh-blue hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Aplicar</button>
                    <p className="rounded-r-lg px-3 py-2 bg-bh-dark-secondary text-white">+30</p>
                </div>
            </div>
            <p className="text-xl font-semibold mt-10">DADOS</p>
            <div className="flex gap-5 w-full mt-3">
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
            </div>
            <div className="flex gap-5 w-full mt-3">
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
                    <option value="" disabled selected><p className="text-white/20">Selecione um arquétipo...</p></option>
                    <option value="">Perpetrador</option>
                </select>
                <button className="bg-black/50 rounded-r-lg px-5 py-2 hover:bg-bh-pink hover:text-white cursor-pointer" onClick={() => handleActionWithConfirm(() => {})}>Selecionar</button>
            </div>
        </div>
    )
}


export default UpdateCharacter