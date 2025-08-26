interface EquipmentsParams {
    img: string;
    alt: string;
    title: string;
    maxSlots: number // 2;
    slots: string[] // ["Equipamento"];
    className?: string
}

function Equipments({ img, alt, title, slots, maxSlots, className }: EquipmentsParams) {
    while(slots.length < maxSlots) {
        slots.push("-")
    }

    return (
        <div className="mt-3">
            <div className={"flex gap-2 items-center" + className}>
                <img src={img} alt={alt} />
                <p className="text-xl font-semibold">{title}</p>
            </div>
            <div className="ml-6">
                {slots.map((slot, index) => ((
                    <p key={index}>{slot}</p>
                )))}
            </div>
        </div>
    )
}

export default Equipments