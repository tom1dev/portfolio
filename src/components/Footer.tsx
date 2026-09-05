import "tailwindcss";

function Footer(){
    const year = new Date().getFullYear();

    return(
    <footer className="w-full border-t border-gray-200 bg-gray-50">
        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between gap-2 border-t border-gray-200 px-15 py-6 text-sm text-gray-500">
            <span>&copy; {year} Tom Devonshire. All rights reserved.</span>
            <span>Built with React, TypeScript, and Tailwind CSS.</span>
        </div>
    </footer>
    );
}

export default Footer;
