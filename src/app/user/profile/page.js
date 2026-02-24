import ProfileInfo from "@/modules/ProfileInfo";
import Sidebar from "@/modules/Sidebar";
import styles from "@/modules/Sidebar.module.css";

function Profile() {
  return (
    <div className="container">
      <Sidebar />

      <ProfileInfo />
    </div>
  );
}

export default Profile;
