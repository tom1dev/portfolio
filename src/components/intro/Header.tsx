

function Header(){


    return(
    <div className="flex flex-row w-full min-h-8 items-center justify-between between bg-red-500 px-5 py-3 z-5">
        <div className="self-center text-center border flex flex-row gap-4">
            <img src="../../public/Logo.jpg" className="h-14"></img>
            <p className="self-center text-center">Tom Devonshire</p> 
        </div>
        <div className="self-center text-center border flex-row">website github Projects</div>
    </div>
    
    )

}

export default Header