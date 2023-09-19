"use client";
import React, { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {
    // This is the AdSense code that loads the ads
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2409909836337800"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center", width: "90%" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2409909836337800"
        data-ad-slot="8287183628"
      ></ins>
    </>
  );
};

export default AdSense;
