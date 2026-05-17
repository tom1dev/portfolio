import "tailwindcss";
function SideMenu(){
    return(
    <div className="flex flex-col w-full gap-4">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
    </div>
    );
}

export default SideMenu;