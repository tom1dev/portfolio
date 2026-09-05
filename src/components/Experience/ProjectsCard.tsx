import { FiExternalLink } from "react-icons/fi";

export default function ProjectsCard({headerText, subHeader, tech, bulletPoints, href}: {headerText: string, subHeader: string, tech: string[], bulletPoints: string[], href?: string}) {
    return (
    <div className="border rounded-lg p-4 bg-gray-100 shadow-md">
        <h3 className="text-xl font-bold mb-2">{headerText}</h3>
        <p className={`text-gray-600 ${href ? "mb-1" : "mb-3"}`}>{subHeader}</p>
        {href && (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mb-3 text-sm text-gray-500 hover:text-black transition-colors duration-400"
            >
                <FiExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                {new URL(href).hostname.replace(/^www\./, "")}
            </a>
        )}

        {/* Tech stack */}
        <ul className="flex flex-wrap gap-2 mb-4">
            {tech.map((item) => (
                <li
                    key={item}
                    className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-600"
                >
                    {item}
                </li>
            ))}
        </ul>

        <ul className="list-disc list-inside">
            {bulletPoints.map((point, index) => (
                <li key={index} className="mb-2">{point}</li>
            ))}
        </ul>
    </div>)
}
