import Link from "next/link";
import Hero from "./components/Hero";
import Strip from "./components/Strip";

export const metadata = {
  title: "GuideWale | Home",
  description:
    "Get latest Job Information, Health Tips, MedicaL Advices And many more at one Place"
};

const Page = async () => {
  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
};

export default Page;
