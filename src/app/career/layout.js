import AdsbygoogleInitializer from "../components/adsbygoogle-init";

export default function CareerLayout({ children }) {
  return (
    <>
      <section>{children}</section>
      <AdsbygoogleInitializer />
    </>
  );
}
