import { FunctionComponent } from "react";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    return (<nav className="bg-white border-gray-200">
        <div className="max-w-screen px-5 py-2 flex flex-wrap items-center justify-between text-lg ">
            <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse"
            >
                <span style={{ fontFamily: "Boston-Angel-Bold" }} className="text-[#FF554B]  self-center text-4xl whitespace-nowrap">
                    dengo
                </span>
                <div>
                    <span style={{ fontFamily: "Boston-Angel-regular" }} className="text-[#545454]">
                        for res
                    </span>
                    <span style={{ fontFamily: "Boston-Angel-regular" }} className="text-[#545454]">
                        ident
                    </span>
                    <span style={{ fontFamily: "Boston-Angel-regular" }} className="text-[#545454]">
                        ial
                    </span>
                </div>
            </a>
            <div className="flex items-center justify-between p-2 space-x-2 ">
                {/* Active and Help buttons (hidden on mobile) */}
                <div className="hidden md:flex space-x-4 items-center">
                    {/* Active button */}
                    <button className="flex items-center bg-gray-100  rounded-full px-3 py-2 space-x-2">
                        <span className="bg-green-500 rounded-full w-2.5 h-2.5" />
                        <span className="text-black font-medium">Active</span>
                    </button>
                    {/* Help button */}
                    <button className="flex items-center bg-gray-100 rounded-full px-3 py-2 space-x-2">
                        <span className="bg-black text-white rounded-full px-2 py-1 text-sm">
                            ?
                        </span>
                        <span className="text-black font-medium">Help</span>
                    </button>
                </div>
                <button className=" flex items-center justify-center bg-[#172026] text-white rounded-full w-9 h-9">
                    CV
                </button>
                {/* Hamburger menu icon (visible only on mobile) */}
                <button className="block md:hidden ml-3 text-[#172026]">
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                {/* CV button (always visible) */}

            </div>


        </div>
    </nav>);
}

export default Header;