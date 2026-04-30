import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import ProfileInfo from "@/modules/ProfileInfo";
import Sidebar from "@/modules/Sidebar";

function Profile() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log(accessToken)

  if (!accessToken) {
     redirect("/");
  }
  return (
    <div className="container">
      <Sidebar />

      <ProfileInfo />
    </div>
  );
}

export default Profile;
