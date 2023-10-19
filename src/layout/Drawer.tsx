export default function Drawer() {
    const menus = [
        {
            icon: <i className="mr-2 fa-solid fa-chart-column" />,
            text: "Overview",
            badge: ""
        },
        {
            icon: <i className="mr-2 fa-solid fa-calendar-check" />,
            text: "Visits",
            badge: "4",
        },
        {
            icon: <i className="mr-2 fa-solid fa-hand-holding-dollar" />,
            text: "Earnings",
            badge: ""
        },
        {
            icon: <i className="mr-2 fa-regular fa-star" />,
            text: "Reviews",
            badge: ""
        },
    ]

    const bottomMenus = [
        {
            icon: <i className="mr-2 fa-solid fa-circle-radiation" />,
            text: "Support",
            badge: ""
        },
        {
            icon: <i className="mr-2 fa-solid fa-gear" />,
            text: "Settings",
            badge: ""
        },
    ]

    return (
        <div className="fixed hidden lg:block lg:relative min-w-[320px] w-[320px] p-4 min-h-screen bg-purple-700 ">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="w-full h-[200px] flex flex-col justify-center items-center">
                        <i className="fa-solid fa-circle-chevron-down" />
                        <h4 className="text-2xl font-medium text-white">Logo</h4>
                    </div>

                    <ul>
                        {menus.map((m) => (
                            <li key={m.text} className="py-4 font-normal text-white">
                                <a href="#">{m.icon} {m.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul>
                    {bottomMenus.map((m) => (
                        <li key={m.text} className="py-2 font-normal text-white">
                            <a href="#">{m.icon} {m.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )

}