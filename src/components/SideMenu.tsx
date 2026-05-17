import "tailwindcss";
function SideMenu(){
    return(
    <div className="flex flex-col w-full gap-4">
        <a href="/"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}>About</a>
        <a href="/"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}>Experience</a>
        <a href="/"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}>Contact</a>
    </div>
    );
}

export default SideMenu;