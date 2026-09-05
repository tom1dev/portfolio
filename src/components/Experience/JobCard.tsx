import { FiExternalLink } from "react-icons/fi";

export default function JobCard({headerText, subHeader, bulletPoints, href}: {headerText: string, subHeader: string, bulletPoints: string[], href?: string}) {
    return (
    <div className="">
        <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-bold min-w-0">{headerText}</h3>
            {href && (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 mt-0.5 text-md text-gray-500 hover:text-black transition-colors duration-400"
                >
                    <FiExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {new URL(href).hostname.replace(/^www\./, "")}
                </a>
            )}
        </div>
        <p className="text-gray-600 text-md mb-4">{subHeader}</p>
        <ul className="list-disc list-inside">
            {bulletPoints.map((point, index) => (
                <li key={index} className="mb-2">{point}</li>
            ))}
        </ul>
    </div>)
}
