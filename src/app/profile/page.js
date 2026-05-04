import ProfileInfo from "@/modules/ProfileInfo";
import Sidebar from "@/modules/Sidebar";

import styles from "./page.module.css"

function Profile() {
  return (
    <div className="container profileContainer">
      
        <Sidebar />

        <ProfileInfo />
      
    </div>
  );
}

export default Profile;
