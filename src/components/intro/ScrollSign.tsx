import { useEffect, useState } from "react";

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
        <div className="fixed bottom-8 right-8 p-6 bg-white text-black">
          <a
            href="/"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-row hover:text-gray-600 transition-colors duration-400"
            >
            Scroll 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 self-end"
            >
              <path d="M12 16l-6-6h12z" />
            </svg>
          </a>
        </div>
      )}
    </>
  );
}

export default ScrollSign;