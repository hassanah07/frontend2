import Script from "next/script";

export default function BlogLayout({ children }) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
