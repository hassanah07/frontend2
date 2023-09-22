"use client";
import React, { useEffect } from "react";
import { enableGoogleAdsense } from "@/app/democompo/AdInit";

const Goole = ({ client, slot }) => {
  enableGoogleAdsense();
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div style={{ textAlign: "left", overflow: "hidden" }}>
      <small>Advertisement</small>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Goole;
