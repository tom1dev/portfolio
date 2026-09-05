import "tailwindcss";
import SectionHeader from "./public/SectionHeader";
import BodyText from "./public/BodyText";
import JobCard from "./Experience/JobCard";
function MyExperience(){
    return(
    <div>
        {/* Header */}
        <SectionHeader headerText="Experience"/>

        {/* Jobs */}
        <div className="flex flex-col gap-6 p-4">
            {jobs.map((job) => (
                <JobCard
                    key={job.headerText + job.subHeader}
                    headerText={job.headerText}
                    subHeader={job.subHeader}
                    bulletPoints={job.bulletPoints}
                    href={job.href}
                />
            ))}
        </div>

        {/* Education */}
        <h3 className="text-xl font-semibold px-4 pt-4">Education</h3>
        <div className="p-4">
            <JobCard
                headerText={education.headerText}
                subHeader={education.subHeader}
                bulletPoints={education.bulletPoints}
            />
        </div>
    </div>
    );
}
const jobs = [
    {
        headerText: "Junior Developer - Hoist NZ",
        subHeader: "05/2026 - Present",
        href: "https://hoist.nz/",
        bulletPoints: [
            "Build full-stack solutions using C# and ASP.NET on the backend with React and React Native on the frontend.",
            "Work across the full development lifecycle, covering design, architecture, build, testing, and ongoing support.",
            "Wear multiple hats in a small team, designing and delivering solutions end to end and building breadth across the stack.",
        ],
    },
    {
        headerText: "Software Engineering Intern - Svasthya NZ",
        subHeader: "01/2025 - 10/2025",
        href: "https://svasthya.nz/",
        bulletPoints: [
            "Built and deployed a cross-platform Point of Sale app using React Native, Node/Express, and MySQL, integrating Stripe's Terminal SDK to replace a third-party solution and cut transaction fees by 28%.",
            "Owned the project end-to-end: feasibility review, design, deployment to A2 Hosting, and an internal Play Store release tested on live transactions.",
            "Secured the payment backend with expiring JWT authentication, brute-force protection, and HTTPS, and added a metrics page for transaction totals.",
            "Diagnosed WordPress performance issues using Google Lighthouse and Query Monitor, identifying conflicting caching plugins and eliminating 0.8s of load time.",
            "Migrated a deprecated barcode plugin to WooCommerce's native SKU system using custom SQL, working from a CPanel and Cloudflare staging site.",
        ],
    },
    {
        headerText: "Undergraduate Software Trainee - New Zealand Maths and Physics Competition(NZPMC)",
        subHeader: "01/2024 - 01/2025",
        href: "https://www.nzpmc.com/",
        bulletPoints: [
            "Built a full-stack competition platform with a ReactJS frontend and MongoDB database, supporting question management, automated grading, and result analytics with score distribution graphs.",
            "Migrated the backend from Node/Express to SpringBoot to match the production stack, modelling the MongoDB schema in UML before implementing CRUD endpoints.",
            "Structured the backend into router, controller, service, and model layers to keep the codebase readable and extensible.",
            "Implemented hashed passwords and JWT cookie sessions with role-gated endpoints, then deployed the application to Render.",
            "Completed Full Stack Open to gain MERN proficiency, then presented the finished platform to the engineering team.",
        ],
    },
    {
        headerText: "Production and Manufacturing Engineering Intern - Steel & Tube",
        subHeader: "11/2023 - 03/2024",
        href: "https://steelandtube.co.nz/",
        bulletPoints: [
            "Built a SCORM-compliant e-learning module from scratch using HTML, CSS, JavaScript, and XML, reporting quiz scores and pass/fail results back to the company's Intelex training platform.",
            "Built an Excel mesh calculator using XLOOKUP across all 23 mesh variants, streamlining work order creation and reducing errors.",
            "Optimised the rebar straightening and cutting machine through systematic parameter testing, reducing the manufacturing error rate to 0.5%.",
        ],
    },
]

const education = {
    headerText: "Bachelor of Engineering (Honours), Software Engineering",
    subHeader: "The University of Auckland | 02/2022 - 03/2026",
    bulletPoints: [
        "Graduated with First Class Honours and a cumulative GPA of 7.6.",
    ],
}

export default MyExperience;
