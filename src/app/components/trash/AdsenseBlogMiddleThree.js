"use client";
import React, { useEffect } from "react";

const AdSenseBlogMiddleThree = () => {
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
    const adsenseContainer = document.getElementById(
      "adsense-blog-middle-three"
    );
    if (adsenseContainer) {
      (adsbygoogle = window.adsbygoogle || []).push({
        className: "adsbygoogle-blog-middle-one"
      });
    }
  }, []);

  return (
    <div id="adsense-blog-middle-three" className="rounded-lg shadow-2xl">
      <ins
        className="adsbygoogle-blog-middle-one"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2409909836337800"
        data-ad-slot="6776282091"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseBlogMiddleThree;
