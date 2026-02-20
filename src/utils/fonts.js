import localFont from "next/font/local";

const yekanFont = localFont({
  src: [
    {
      path: "../assets/fonts/YekanBakh-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Regular.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Bold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Heavy.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Fat.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default yekanFont;
