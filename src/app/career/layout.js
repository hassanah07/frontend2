import Script from "next/script";

export default function CareerLayout({ children }) {
  return (
    <>
      <section>{children}</section>
      <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2409909836337800" />
    </>
  );
}
