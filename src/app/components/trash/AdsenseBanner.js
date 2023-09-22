"use client";
import React, { useEffect } from "react";

const AdSenseBanner = () => {
  // if (typeof window !== "undefined") {
  //   if (!window.adsbygoogle || !window.adsbygoogle.push) {
  //     window.adsbygoogle = window.adsbygoogle || [];
  //     window.adsbygoogle.push({});

  //     const script = document.createElement("script");
  //     script.async = true;
  //     script.src =
  //       "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  //     document.head.appendChild(script);
  //   }
  // }
  // useEffect(() => {
  //   // Target the specific div element with id "adsense-container"
  //   const adsenseContainer = document.getElementById(
  //     "adsense-container-banner"
  //   );
  //   if (adsenseContainer) {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({
  //       className: "adsbygoogle-banner" // Use the component-specific class name
  //     });
  //   }
  // }, []);
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        className: "adsbygoogle-banner"
      });
    } catch (err) {
      console.log(err);
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
