"use client";
import React, { useEffect } from "react";

const AdsenseInblocks = () => {
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
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-2409909836337800"
        data-ad-slot="8164142112"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  );
};

export default AdsenseInblocks;
