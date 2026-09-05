import "tailwindcss";
import SectionHeader from "./public/SectionHeader";
import BodyText from "./public/BodyText";
function AboutMe(){
    return(
    <div>
        {/* Header */}
        <SectionHeader headerText="About"/>

        {/* Body Text */}
        <BodyText 
            bodyText={text}
        />
    </div>
    );
}


const text = [
            "I'm a recent graudaute at the University of Auckland, Graduating with a Bachelor of Engineering (Honours) in Software Engineering, First Class Honours. I'm currently working as a fullstack software engineer at Hoist NZ, where I am continuing to learn and grow as a developer. As an engineer, I've worked on a variety of full stack projects. As a result, I have a understanding of the software development lifecycle, and I'm comfortable working in agile team environments. I've worked with a variety of technologies, I'm most comfortable with JavaScript/Reactjs, C#/Asp.net, Java/Springboot. However, I'm always eager to learn new technologies and frameworks as needed for a role or project.",
            "Outside of work, I enjoy spending time with my family and friends, playing video games, hiking, fishing (living in Auckland doesn't make this easy), playing board games. One thing I have always been interested in is the business, finance, and stocks. I enjoy learning about the stock market and how to invest wisely, and I have a keen interest in understanding how businesses operate, make money especially in the technology space which is in my scope of confidence. I believe that having a strong understanding of business and finance allows me to design and make better decisions to improve the software I build so that it not only works but also provides value."   
            ]

export default AboutMe;