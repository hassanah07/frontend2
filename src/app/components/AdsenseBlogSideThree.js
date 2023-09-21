"use client";
import React, { useEffect } from "react";

const AdSenseBlogSideThree = () => {
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
    const adsenseContainer = document.getElementById("adsense-blog-side-three");
    if (adsenseContainer) {
      (adsbygoogle = window.adsbygoogle || []).push({
        className: "adsbygoogle-blog-side-three"
      });
    }
  }, []);

  return (
    <div id="adsense-blog-side-three" className="rounded-lg shadow-2xl">
      <ins
        className="adsbygoogle-blog-side-three"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2409909836337800"
        data-ad-slot="7514648695"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseBlogSideThree;
