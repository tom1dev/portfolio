

export default function JobCard({headerText, subHeader, bulletPoints}: {headerText: string, subHeader: string, bulletPoints: string[]}) {
    return (
    <div className="border rounded-lg p-4 bg-gray-100 shadow-md">
        <h3 className="text-xl font-bold mb-2">{headerText}</h3>
        <p className="text-gray-600 mb-4">{subHeader}</p>
        <ul className="list-disc list-inside">
            {bulletPoints.map((point, index) => (
                <li key={index} className="mb-2">{point}</li>
            ))}
        </ul>
    </div>)
}