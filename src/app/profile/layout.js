import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Sidebar from "@/modules/Sidebar";

function ProfileLayout({ children }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    redirect("/");
  }

  return <div>{children}</div>;
}

export default ProfileLayout;
