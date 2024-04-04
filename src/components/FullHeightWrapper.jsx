import { useEffect, useState } from "react";

const FullHeightWrapper = ({ children }) => {
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
    <div style={{ height: `${height}px`, overflowY: "auto" }}>{children}</div>
  );
};

export default FullHeightWrapper;
