function NewCharacter() {
    return (
        <div className="flex flex-col mt-5 gap-10">
            <div>
                <p className="text-xl font-semibold">INFORMAÇÕES</p>
                <div className="flex gap-5">
                    <div className="mt-3 flex">
                        <p className="bg-black/50 rounded-l-lg px-5 py-2">Rank</p>
                        <input type="text" placeholder="F" className="bg-black/20 rounded-r-lg pl-5 py-2 max-w-15 placeholder:text-white/20"/>
                    </div>
                    <div className="mt-3 flex">
                        <p className="bg-black/50 rounded-l-lg px-5 py-2">Nível</p>
                        <input type="number" min="1" placeholder="1" className="bg-black/20 rounded-r-lg pl-5 py-2 max-w-15 placeholder:text-white/20"/>
                    </div>
                    <div className="mt-3 flex">
                        <p className="bg-black/50 rounded-l-lg px-5 py-2">Exp</p>
                        <input type="number" min="0" placeholder="0" className="bg-black/20 rounded-r-lg pl-5 py-2 max-w-15 placeholder:text-white/20"/>
                    </div>
                </div>
                <div className="mt-3 flex">
                    <p className="bg-black/50 rounded-l-lg px-5 py-2">Dinheiro</p>
                    <input type="number" min="0" placeholder="500 Y" className="bg-black/20 rounded-r-lg pl-5 py-2 max-w-25 placeholder:text-white/20"/>
                </div>
            </div>
            <div>
                <p className="text-xl font-semibold">DADOS</p>
                <div className="flex gap-5">
                    <div className="mt-3 flex">
                        <p className="bg-black/50 rounded-l-lg px-5 py-2">Vigor</p>
                        <input type="number" min="6" max="12" placeholder="6" className="bg-black/20 rounded-r-lg pl-5 py-2 max-w-15 placeholder:text-white/20"/>
                    </div>
                    <div className="mt-3 flex">
                        <p className="bg-black/50 rounded-l-lg px-5 py-2">Força</p>
                        <input type="number" min="6" max="12" placeholder="6" className="bg-black/20 rounded-r-lg pl-5 py-2 max-w-15 placeholder:text-white/20"/>
                    </div>
                    <div className="mt-3 flex">
                        <p className="bg-black/50 rounded-l-lg px-5 py-2">Presença</p>
                        <input type="number" min="6" max="12" placeholder="6" className="bg-black/20 rounded-r-lg pl-5 py-2 max-w-15 placeholder:text-white/20"/>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="mt-3 flex">
                        <p className="bg-black/50 rounded-l-lg px-5 py-2">Agilidade</p>
                        <input type="number" min="6" max="12" placeholder="6" className="bg-black/20 rounded-r-lg pl-5 py-2 max-w-15 placeholder:text-white/20"/>
                    </div>
                    <div className="mt-3 flex">
                        <p className="bg-black/50 rounded-l-lg px-5 py-2">Inteligência</p>
                        <input type="number" min="6" max="12" placeholder="6" className="bg-black/20 rounded-r-lg pl-5 py-2 max-w-15 placeholder:text-white/20"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NewCharacter