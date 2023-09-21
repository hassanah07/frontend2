"use client";
import { useEffect } from "react";

const initializeAdsbygoogle = () => {
  if (typeof window !== "undefined") {
    if (!window.adsbygoogle || !window.adsbygoogle.push) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});

      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      document.head.appendChild(script);
    }
  }
};

const AdsbygoogleInitializer = () => {
  useEffect(() => {
    initializeAdsbygoogle();
  }, []);

  return null; // This component doesn't render anything
};

export default AdsbygoogleInitializer;
