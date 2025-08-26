interface StatParams {
    img: string;
    alt: string;
    value: string | number;
    className?: string
}

function Stat({ img, alt, value, className }: StatParams) {
    return (
        <>        
            <div className="flex">
                <img src={img} alt={alt} className={`mr-1.5 ${className}`}/>
                <p className="">{value}</p>
            </div>
        </>
    )
}

export default Stat