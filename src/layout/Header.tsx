export default function Header() {
    return (
        <div className="h-[80px] flex items-center justify-end gap-4 shadow-lg">
            <i className="fa-regular fa-bell" />
            <i className="fa-regular fa-bell" />
            <i className="fa-regular fa-bell" />

            <button className="w-[80px] h-full text-white bg-purple-700 rounded" type="button">
                <i className="fa-solid fa-arrow-right-from-bracket" />
            </button>
        </div>
    )
}