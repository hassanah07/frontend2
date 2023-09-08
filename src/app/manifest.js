export default function manifest() {
  return {
    name: "GuideWale",
    short_name: "GuideWale",
    description:
      "Get latest Job Information, Health Tips, MedicaL Advices And many more at one Place",
    start_url: "/career",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
