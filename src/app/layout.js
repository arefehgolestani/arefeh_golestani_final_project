import { cookies } from "next/headers";

import Layout from "@/layout/Layout";
import yekanFont from "@/utils/fonts";
import TourProvider from "@/context/TourProvider";
import "./globals.css";



export const metadata = {
  title: "تورینو | برگزار کننده بهترین تورها",
  description: "برگزارکننده بهترین تورهای ایرانی و خارجی",
};

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const initialIsLoggedIn = !!accessToken;

  return (
    <html lang="fa" dir="rtl">
      <body className={yekanFont.className}>
        
        <TourProvider
          initialIsLoggedIn={initialIsLoggedIn}
          initialIsAuthChecked={true}
        >
          <Layout>{children}</Layout>
        </TourProvider>
       
      </body>
    </html>
  );
}
