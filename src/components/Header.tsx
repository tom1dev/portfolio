

function Header(){


    return(
    <div className="fixed top-0 left-0 w-full z-50 flex flex-row min-h-8 items-center justify-between bg-white/5 backdrop-blur-sm px-5 py-3">
        <div className="self-center text-center flex flex-row gap-4">
            <img src="../Logo.jpg" className="h-14"></img>
            <h1 className="self-center text-center text-xl font-semibold">Tom Devonshire</h1> 
        </div>
        <div className="flex flex-row items-center gap-8">
            <a
                href="https://github.com/tom1dev/portfolio"
                className="text-black hover:text-gray-600 transition-colors duration-400 text-xl font-semibold"
                target="_blank"
                rel="noopener noreferrer"
            >
                Website GitHub
            </a>
        </div>
    </div>
    
    )

}

export default Header