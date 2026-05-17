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
        <div className="fixed bottom-8 right-8 border p-6 bg-white">
          <a
            href="/"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            >
            Scroll
            </a>
        </div>
      )}
    </>
  );
}

export default ScrollSign;