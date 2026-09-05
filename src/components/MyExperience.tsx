import "tailwindcss";
import SectionHeader from "./public/SectionHeader";
import BodyText from "./public/BodyText";
import JobCard from "./Experience/JobCard";
function MyExperience(){
    return(
    <div>
        {/* Header */}
        <SectionHeader headerText="My Experience"/>
        
        {/* Body Text */}
        <BodyText 
            bodyText={text}
        />

        {/* Jobs */}
        <div className="flex flex-col gap-6 p-4">
            {jobs.map((job) => (
                <JobCard
                    key={job.headerText + job.subHeader}
                    headerText={job.headerText}
                    subHeader={job.subHeader}
                    bulletPoints={job.bulletPoints}
                />
            ))}
        </div>
    </div>
    );
}

const text = [      
                "I'm a recent graudaute at the University of Auckland, Graduating with a Bachelor of Engineering (Honours) in Software Engineering, First Class Honours.", 
                "Software engineering is a broad feild that can lead down many paths.", 
                "I'm a big believer that being passionate about both the outcome and process of designing solutions will lead to the best outcomes for both for both developers and clients."
            ]

const jobs = [
    {
        headerText: "Software Engineering Intern",
        subHeader: "Svasthya NZ | 01/2025 \u2013 10/2025",
        bulletPoints: [
            "Built and shipped a cross-platform Point of Sale application (React Native, Node/Express, MySQL) that replaced a third-party payment app, integrating the Stripe Terminal SDK directly with the store's card reader and reducing transaction fees by 28% by removing its 0.5% per-transaction cut.",
            "Owned the project end-to-end: feasibility review and pitch, system design, deployment of the Node backend and MySQL database to A2 Hosting, and an internal Play Store release validated with live customer transactions.",
            "Secured the payment backend with daily-expiring JWT authentication, brute-force protection on the sign-in endpoint, and HTTPS-only transport, and added a metrics page reporting monthly and yearly transaction totals.",
            "Diagnosed WordPress/WooCommerce performance issues with Google Lighthouse and Query Monitor, identifying duplicated caching and image-optimisation plugins and eliminating 0.8s of load time.",
            "Migrated a deprecated barcode plugin onto WooCommerce's native SKU management using custom SQL against the WordPress schema, working from a CPanel and Cloudflare staging site so changes never touched production.",
        ],
    },
    {
        headerText: "Undergraduate Software Trainee",
        subHeader: "New Zealand Physics and Math Competition | 11/2024 \u2013 01/2025",
        bulletPoints: [
            "Built a full-stack competition platform with a ReactJS frontend and MongoDB database, supporting competition creation, multi-choice question management, automated grading, and results analytics with mean, median, mode, and per-question score distribution graphs.",
            "Migrated the backend from Node/Express to Java SpringBoot to match the company's production stack, modelling the events, competitions, questions, and attempts schema in UML before implementing the CRUD endpoints.",
            "Organised the backend into router, controller, service, and model layers to keep the codebase readable and extensible, matching the conventions expected of the NZPMC development team.",
            "Implemented password hashing and JWT cookie sessions with role-gated endpoints, and deployed to Render, resolving client-side versus server-side routing by serving the SPA from a wildcard route placed after the API routes.",
            "Completed Full Stack Open modules 0\u20134 to gain MERN proficiency, then applied it end-to-end across design, development, cloud deployment, and a final presentation to the engineering team.",
        ],
    },
    {
        headerText: "Production and Manufacturing Engineering Intern",
        subHeader: "Steel & Tube | 11/2023 \u2013 03/2024",
        bulletPoints: [
            "Built a SCORM 2004-compliant e-learning module from scratch using HTML, CSS, JavaScript, and XML, delivering the site safety induction and reporting quiz scores and pass/fail results back to the company's Intelex training platform; approved by the safety team and trialled on site with real inductees.",
            "Optimised the Schnell RB12 rebar straightening and cutting machine across 8 wire diameters through systematic parameter testing and logging, reducing the material error rate from close to 100% to under 0.5%.",
            "Performed daily quality assurance against AS/NZS 4671:2019 \u2014 rib height, weld shear, and bend-rebend testing \u2014 and maintained end-to-end product traceability through Microsoft Dynamics AX 2012.",
            "Built an Excel mesh calculator using XLOOKUP over an audited specification table covering all 23 mesh variants, streamlining the two-stage work order process and reducing errors and administrative work.",
            "Authored safety documentation including a work instruction job safety analysis report for the IMBMS rod threading machine and an updated site lockout-tagout procedure.",
        ],
    },
]

export default MyExperience;
