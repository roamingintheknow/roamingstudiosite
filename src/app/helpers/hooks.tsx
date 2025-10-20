import { useState, useEffect } from "react";

export function useMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      // true if height > width (portrait)
      setMobile(window.innerHeight > window.innerWidth);
    }

    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return mobile;
}
