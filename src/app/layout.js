import Navigation from "./components/Nav";
import Ribbon from "./components/Ribbon";
import "./globals.css";
import { Inter } from "next/font/google";
import favicon from "./favicon.ico";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "GuideWale",
    template: `%s | GuideWale`
  },
  description:
    "Welcome to GuideWale, your one stop platform for staying updated on jobs, news, health, education, and sports. We pride ourselves on offering a comprehensive resource for individuals seeking a well rounded source of information and opportunities. Stay ahead of the curve with our real time job alerts, ensuring you never miss out on potential career advancements. Our platform aggregates job listings from various industries, making job hunting efficient and tailored to your preferences. In addition, we provide the latest news updates to keep you informed about global events, business trends, and technological advancements that might impact your career choices. Health and wellness are crucial for a successful career, which is why we offer a dedicated section to provide valuable insights and tips on maintaining a balanced lifestyle. From fitness routines to mental health awareness, GuideWale ensures that you have the tools to thrive both personally and professionally. Education is the foundation of growth, and we recognize its importance. Our platform offers educational resources, guides, and advice on skill development and lifelong learning. Whether you're a recent graduate or a seasoned professional looking to up skill, we have you covered. Passionate about sports? Our sports section provides in-depth analysis, highlights, and commentary on your favorite games and athletes. Immerse yourself in the world of sports and engage with fellow enthusiasts through our interactive platform. But that's not all! We believe in the power of sharing knowledge, and GuideWale enables anyone to contribute by writing blogs. Whether you're an industry expert, a budding writer, or simply have something valuable to share, you can earn while expressing yourself. Our user friendly interface makes blogging a breeze, fostering a community of information exchange and collaboration. Join us at GuideWale and unlock a world of opportunities, insights, and connections. Together, we're shaping careers, fostering learning, and embracing the joy of sharing knowledge.",

  // verification: {
  //   google: "google-site-verification=ca-pub-2409909836337800"
  // },
  themeColor: "#000"
};

export default function RootLayout({ children }) {
  const key = Math.round(Math.random() * 999999999000);

  return (
    <html lang="en">
      {/* <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2409909836337800"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head> */}
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <Navigation key={key} />
        {children}
        <Ribbon />
        </ThemeProvider>
      </body>
    </html>
  );
}
