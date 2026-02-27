import Layout from "@/layout/Layout";
import yekanFont from "@/utils/fonts";
import TourProvider from "@/context/TourProvider";
import "./globals.css";

export const metadata = {
  title: "تورینو | برگزار کننده بهترین تورها",
  description: "برگزارکننده بهترین تورهای ایرانی و خارجی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanFont.className}>
        <TourProvider>
          <Layout>{children}</Layout>
        </TourProvider>
      </body>
    </html>
  );
}
