"use client";
import React, { useEffect } from "react";

const AdsenseInarticle = () => {
  useEffect(() => {
    // This is the Adsense Ina rticle code that loads the ads
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2409909836337800"
        crossorigin="anonymous"
      ></script>
      <ins
        class="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2409909836337800"
        data-ad-slot="8287183628"
      />
    </>
  );
};

export default AdsenseInarticle;
