import "tailwindcss";
import { LetterCollision } from "./intro/LetterCollision";
import ScrollSign from "./intro/ScrollSign";
function Intro(){
    return(
    
        <div className="h-full overflow-hidden flex flex-col">

            <div className="flex-1">
                <LetterCollision />
                <ScrollSign />
            </div>

        </div>
   
    ); 
}

export default Intro;