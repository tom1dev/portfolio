import { useEffect, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

function ScrollSign() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {show && (
        <div className="fixed bottom-4 right-8 p-6 bg-white text-black">
          <a
            href="/"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-row hover:text-gray-600 transition-colors duration-400"
            >
            Scroll 
            <LuChevronDown className="h-5 w-5 shrink-0 self-end" aria-hidden="true" />
          </a>
        </div>
      )}
    </>
  );
}

export default ScrollSign;