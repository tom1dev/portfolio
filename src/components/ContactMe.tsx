import "tailwindcss";
function ContactMe(){
    return(
    <div>
        {/* Header */}
        <h2>Contact Me</h2>
        {/* Line items */}
        <ul>
            <li>
                Email: tom@devonshire.co.nz
            </li>
            <li>
                Linked-In: <a href="https://www.linkedin.com/in/tom1dev/" className="hover:text-blue-900">https://www.linkedin.com/in/tom1dev/</a> 
            </li>
            <li>
                GitHub: <a href="https://github.com/tom1dev" className="hover:text-blue-900">https://github.com/tom1dev</a> 
            </li>
            <li>
                Location: Auckland
            </li>
        </ul>
    </div>
    );
}

export default ContactMe;