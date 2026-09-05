import "tailwindcss";
import SectionHeader from "./public/SectionHeader";
import BodyText from "./public/BodyText";
import EntryCard from "./Experience/EntryCard";
import { LuCode } from "react-icons/lu";

function MyProjects(){
    return(
    <div>
        {/* Header */}
        <SectionHeader headerText="Projects"/>

        {/* Body Text */}
        <BodyText
            bodyText={text}
        />

        {/* Projects */}
        <div className="flex flex-col gap-6 p-4">
            {projects.map((project, index) => (
                <div key={project.headerText} className="relative flex gap-4">
                    {/* Runs from this marker's centre down to the next one, so the
                        last item stops rather than trailing off the end. */}
                    {index < projects.length - 1 && (
                        <span
                            aria-hidden="true"
                            className="absolute left-4 top-4 h-[calc(100%+1.5rem)] w-px -translate-x-1/2 bg-gray-300"
                        />
                    )}

                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-500 bg-white">
                        <LuCode className="h-4 w-4 text-gray-500" aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                        <EntryCard
                            headerText={project.headerText}
                            subHeader={project.subHeader}
                            tech={project.tech}
                            bulletPoints={project.bulletPoints}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

const text = [
    "Alongside my professional work, these are the projects I've chosen to take on myself, and the ones I most enjoy talking through.",
]

const projects = [
    {
        headerText: "Figaro - Spatial Visualisation Testing Framework",
        subHeader: "Research Project, University of Auckland | 2025",
        tech: ["FreeCAD", "R", "OpenAI", "Anthropic", "Google", "Mistral"],
        bulletPoints: [
            "Rebuilt the shape generation of a FreeCAD-based question generator with a connection-based procedural algorithm, adding tunable parameters for object structure, shape complexity, question type, and mutation.",
            "Built an evaluation pipeline that ran generated question banks against five multimodal models, collecting 15,840 responses with shuffled answer positions to measure consistency across attempts.",
            "Analysed the results in R using logistic regression, ANOVA, and pairwise marginal-means comparisons, benchmarking model accuracy against 988 students and isolating rotation tasks, shape complexity, and positional bias as the main failure modes.",
        ],
    },
    {
        headerText: "Path.io",
        subHeader: "DEVS x GDSC Hackathon | 2023",
        tech: ["Java", "XML", "SQLite", "Android"],
        bulletPoints: [
            "Built a gamified health and fitness Android app in a team of six, where players walk to enclose and claim an area.",
            "Placed third overall and won the Most Promising Concept award.",
        ],
    },
]

export default MyProjects;
