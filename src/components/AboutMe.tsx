import "tailwindcss";
import SectionHeader from "./public/SectionHeader";
import BodyText from "./public/BodyText";
function AboutMe(){
    return(
    <div>
        {/* Header */}
        <SectionHeader headerText="About Me"/>

        {/* Body Text */}
        <BodyText 
            bodyText={text}
        />
    </div>
    );
}


const text = [
            "I'm a recent graudaute at the University of Auckland, Graduating with a Bachelor of Engineering (Honours) in Software Engineering, First Class Honours.",
            "Software engineering is a broad feild that can lead down many paths. I'm a big believer that being passionate about both the outcome and process of designing solutions will lead to the best outcomes for both for both developers and clients. My Perfessional interests align with creating web and mobile solutions so that can help both businesses and people acheive success.",
            "I'm currently working as a software engineer at Hoist NZ, where I am continuing to learn and grow as a developer, while also contributing to the success of the team and company. As an engineer, I've worked on a variety of projects, from small web applications to large-scale enterprise systems. As a result, I have a strong understanding of the software development lifecycle, and I'm comfortable working in both agile and waterfall environments. I've worked with a variety of technologies, I'm most comfortable with JavaScript/Reactjs, C#/Asp.net, Java/Springboot. However, I'm always eager to learn new technologies and frameworks as needed for a role or project.",
            "Outside of work, I enjoy spending time with my family and friends, playing video games, hiking, fishing (living in Auckland doesn't make this easy), playing board games, and sharping my skills in programming and software development with personal interests. One thing I have always been interested in is the business, finance, and stocks. I enjoy learning about the stock market and how to invest wisely, and I have a keen interest in understanding how businesses operate, make money especially in the technology space which is in my scope of confidence. I believe that having a strong understanding of business and finance is essential for any software engineer, as it allows me to better understand the needs of clients and users, and to create solutions that are both effective and efficient."   
            ]

export default AboutMe;