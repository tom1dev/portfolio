import "tailwindcss";
import SectionHeader from "./public/SectionHeader";
import BodyText from "./public/BodyText";
import ProjectsCard from "./Experience/ProjectsCard";

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
            {projects.map((project) => (
                <ProjectsCard
                    key={project.headerText}
                    headerText={project.headerText}
                    subHeader={project.subHeader}
                    tech={project.tech}
                    bulletPoints={project.bulletPoints}
                />
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
        headerText: "Figaro – Spatial Visualisation Testing Framework",
        subHeader: "Part IV Research Project, University of Auckland | 2025",
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
