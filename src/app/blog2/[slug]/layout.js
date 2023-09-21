// import AdsbygoogleInitializer from "@/app/components/adsbygoogle-init";

export default function BlogLayout({ children }) {
  return (
    <>
      <section>{children}</section>
      {/* <AdsbygoogleInitializer /> */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2409909836337800"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
