"use client";
import React from "react";
import { useRouter } from "next/navigation";

class AdCodeWithoutRouter extends React.Component {
  renderAds() {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      className: "adsbygoogle-banner"
    });
  }
  componentDidMount() {
    this.renderAds();
  }
  componentDidUpdate(preProp) {
    if (this.props.router.asPath !== preProp.router.asPath) {
      this.renderAds();
    }
  }
  render() {
    return (
      <div
        className="container mx-auto text-center w-[97%] md:w-[50%]"
        aria-hidden={true}
      >
        <ins
          className="adsbygoogle-banner"
          style={{ display: "block" }}
          data-ad-client="1632315360"
          data-ad-slot="1632315360"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

const AdCode = () => {
  const router = useRouter();
  return <AdCodeWithoutRouter router={router} />;
};

export default AdCode;
