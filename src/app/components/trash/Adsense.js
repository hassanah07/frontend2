"use client";
import React, { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {

    // Target the specific div element with id "adsense-container"
    const adsenseContainer = document.getElementById("adsense-container-ad");
    if (adsenseContainer) {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        className: "adsbygoogle-ad" // Use the component-specific class name
      });
    }
  }, []);

  return (
    <div id="adsense-container-ad" className="rounded-lg shadow-2xl">
      <ins
        className="adsbygoogle-ad"
        style={{ display: "block", textAlign: "center", minWidth: "250px" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2409909836337800"
        data-ad-slot="8287183628"
      ></ins>
    </div>
  );
};

export default AdSense;
