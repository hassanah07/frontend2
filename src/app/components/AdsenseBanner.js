"use client";
import React, { useEffect } from "react";

const AdSenseBanner = () => {
  useEffect(() => {
    // Check if the adsbygoogle script has already been loaded
    // if (!window.adsbygoogle) {
    //   // Define the adsbygoogle variable
    //   window.adsbygoogle = window.adsbygoogle || [];

    //   // Push the ad loading function to the adsbygoogle array
    //   window.adsbygoogle.push({});

    //   // Ensure that the script is loaded
    //   const script = document.createElement("script");
    //   script.async = true;
    //   script.src =
    //     "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    //   document.head.appendChild(script);
    // }

    // Target the specific div element with id "adsense-container"
    const adsenseContainer = document.getElementById("adsense-container-banner");
    if (adsenseContainer) {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        className: "adsbygoogle-banner" // Use the component-specific class name
      });
    }
  }, []);

  return (
    <div id="adsense-container-banner" className="rounded-lg shadow-2xl">
      <ins
        className="adsbygoogle-banner"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2409909836337800"
        data-ad-slot="1632315360"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseBanner;
