const Header = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        console.log(`Attempting to scroll to: ${targetId}`);

        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            console.log(`Found element: ${targetElement}`);
            targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
            console.log(`Element not found: ${targetId}`);
        }
    };

    return (
        <div className="header w-full bg-gray-50 drop-shadow-sm font-quattrocento fixed top-0 left-0 z-50">
            <nav className="max-w-6xl mx-auto p-4">
                <ul className="flex justify-center space-x-12">
                    <li>
                        <a
                            onClick={(e) => handleScroll(e, "about")}
                            className="text-gray-700 hover:underline decoration-blue-400 hover:scale-110 cursor-pointer"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => handleScroll(e, "projects")}
                            className="text-gray-700 hover:underline decoration-blue-400 hover:scale-110 cursor-pointer"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => handleScroll(e, "blog")}
                            className="text-gray-700 hover:underline decoration-blue-400 hover:scale-110 cursor-pointer"
                            href="https://medium.com/@kylasbronquillo"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => handleScroll(e, "contact")}
                            className="text-gray-700 hover:underline decoration-blue-400 hover:scale-110 cursor-pointer"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
