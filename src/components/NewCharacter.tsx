import { useState } from "react";

function NewCharacter() {
    const options = [
        { label: "Conjurador", value: "conjurador" },
        { label: "Domador", value: "domador" },
        { label: "Insinuante", value: "insinuante" },
        { label: "Mediador", value: "mediador" },
        { label: "Ressabiador", value: "ressabiador" },
        { label: "Dificultador", value: "dificultador" },
        { label: "Segurador", value: "segurador" },
        { label: "Ajudador", value: "ajudador" },
    ];

    const [selected, setSelected] = useState<string[]>([]);

    const toggleOption = (value: string) => {
        if (selected.includes(value)) {
        // se já está selecionado, remove
        setSelected(selected.filter((opt) => opt !== value));
        } else if (selected.length < 3) {
        // só adiciona se tiver menos de 3
        setSelected([...selected, value]);
        }
    };

    return (
        <div className="flex flex-col mt-5 gap-10 overflow-y-scroll scrollbar-hide max-h-80 max-w-125">
            <div>
                <p className="text-xl font-semibold">INFORMAÇÕES</p>
                <div className="flex gap-5 flex-wrap">
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
                <div className="flex gap-5 flex-wrap">
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
            <div>
                <p className="text-xl font-semibold">ARQUÉTIPOS</p>
                <div className="flex gap-2 flex-wrap mt-3">
                    {options.map((opt) => (
                        <button
                            value={opt.label}
                            onClick={() => toggleOption(opt.label)}
                            className={`px-4 py-2 rounded-lg transition ${
                                selected.includes(opt.label)
                                ? "bg-black/50 cursor-pointer"
                                : "bg-black/20 cursor-pointer"
                            }`}
                            >
                            {opt.label}
                        </button>
                    ))}

                    <div className="w-full mt-4 text-sm text-bh-soft-white">
                        {selected.join(", ") || "Nenhum"}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NewCharacter