import "tailwindcss";
import SectionHeader from "./public/SectionHeader";
import EntryCard from "./Experience/EntryCard";
import { LuGraduationCap } from "react-icons/lu";

function MyEducation(){
    return(
    <div>
        {/* Header */}
        <SectionHeader headerText="Education"/>

        {/* Education */}
        <div className="flex flex-col gap-6 p-4">
            {education.map((item, index) => (
                <div key={item.headerText} className="relative flex gap-4">
                    {/* Runs from this marker's centre down to the next one, so the
                        last item stops rather than trailing off the end. */}
                    {index < education.length - 1 && (
                        <span
                            aria-hidden="true"
                            className="absolute left-4 top-4 h-[calc(100%+1.5rem)] w-px -translate-x-1/2 bg-gray-300"
                        />
                    )}

                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-500 bg-white">
                        <LuGraduationCap className="h-4 w-4 text-gray-500" aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                        <EntryCard
                            headerText={item.headerText}
                            subHeader={item.subHeader}
                            bulletPoints={item.bulletPoints}
                            href={item.href}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

const education = [
    {
        headerText: "Bachelor of Engineering (Honours), Software Engineering - The University of Auckland",
        subHeader: "02/2022 - 03/2026",
        href: "https://www.auckland.ac.nz/",
        bulletPoints: [
            "Graduated with First Class Honours and a cumulative GPA of 7.6.",
        ],
    },
    {
        headerText: "NCEA Levels 1, 2 and 3 - Sancta Maria College, Auckland",
        subHeader: "02/2015 - 02/2021",
        href: "https://www.sanctamaria.school.nz/",
        bulletPoints: [
            "Achieved NCEA Levels 1, 2 and 3, each with an Excellence endorsement.",
            "Awarded the college's top scholar prize in Calculus and Digital Technologies at Level 3.",
        ],
    },
]

export default MyEducation;
