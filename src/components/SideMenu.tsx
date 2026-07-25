import "tailwindcss";
import { useEffect, useState } from "react";

const links = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

function SideMenu(){
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        //gets the section associated component by the id appended to it.
        const sections = links
            .map((link) => document.getElementById(link.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            // Only count a section as "current" once it crosses the upper
            // third of the viewport, below the fixed header.
            { rootMargin: "-30% 0px -60% 0px" }
        );

        //shows when each commonent should be observed
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return(
    <div className="flex flex-col w-full gap-4">
        {links.map((link) => {
            const isActive = link.id === activeId;
            return (
                <a
                    key={link.id}
                    href="/"
                    className={`flex items-center gap-3 transition-colors duration-400 ${
                        isActive
                            ? "font-semibold text-black"
                            : "text-gray-500 hover:text-gray-600"
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <span
                        className={`h-px bg-current transition-all duration-400 ${
                            isActive ? "w-6" : "w-2"
                        }`}
                    />
                    {link.label}
                </a>
            );
        })}
    </div>
    );
}

export default SideMenu;
