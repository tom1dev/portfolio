import "tailwindcss";
import { LetterCollision } from "./intro/LetterCollision";
import ScrollSign from "./intro/ScrollSign";
function Intro(){
    return(
    
    <div className="h-full overflow-hidden">
        <LetterCollision />
        <ScrollSign />
    </div>
    );
}

export default Intro;