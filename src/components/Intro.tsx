import "tailwindcss";
import { LetterCollision } from "./intro/LetterCollision";
import ScrollSign from "./intro/ScrollSign";
import Header from "./intro/Header";
function Intro(){
    return(
    
        <div className="h-full flex flex-col">
            <div className="w-full border flex h-1/3">
                <Header/>
            </div>

            <div className="flex-1 overflow-hidden">
                <LetterCollision />
                <ScrollSign />
            </div>

        </div>
   
    );
}

export default Intro;