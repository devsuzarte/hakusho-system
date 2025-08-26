interface SidebarSelectorParams {
    color: string
    img: string,
    alt: string
    page: string
    onClick: (page: string) => void;
}

function SidebarSelector({ color, img, alt, page, onClick }: SidebarSelectorParams) {
    return (
        <div className={`${color} h-12 w-12 flex justify-center items-center rounded-2xl cursor-pointer transition-transform duration-200 hover:scale-110`} onClick={() => onClick(page)}>
            <img src={img} alt={alt} />
        </div>
    )
}

export default SidebarSelector