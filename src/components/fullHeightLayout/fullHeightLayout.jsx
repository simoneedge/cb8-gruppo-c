import { useEffect, useState } from "react";

const FullHeightLayout = ({ children }) => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{ minHeight: `${height}px`, height: "100%", overflowY: "hidden" }}
    >
      {children}
    </div>
  );
};

export default FullHeightLayout;
