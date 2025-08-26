interface SelectorParams {
    color: string,
    img: string,
    alt: string,
    title: string,
    onClick?: () => void;
}

function Selector({color, img, alt, title, onClick}: SelectorParams) {
    return (
        <div 
            className={`${color} group flex h-12.5 p-3 items-center gap-3 text-white rounded-r-full cursor-pointer w-12.5 hover:w-50 transition-all duration-300 ease-in overflow-hidden`}
            onClick={onClick}
        >
            <img src={img} alt={alt} />
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in whitespace-nowrap text-xl font-semibold pr-3">
                {title}
            </p>
        </div>
    )   
}

export default Selector;