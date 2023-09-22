import Script from "next/script";
import React from "react";

const GoogleAdsenseScript = () => {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2409909836337800"
        crossOrigin="anonymous"
      ></Script>
      <Script
        id="adsbygoogle"
        dangerouslySetInnerHTML={{
          __html: `
          window.adsbygoogle = window.adsbygoogle || []).push({});
        `
        }}
      ></Script>
    </>
  );
};

export default GoogleAdsenseScript;
