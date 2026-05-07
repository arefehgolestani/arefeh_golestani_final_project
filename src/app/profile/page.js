import ProfileInfo from "@/modules/ProfileInfo";
import Sidebar from "@/modules/Sidebar";

function Profile() {
  return (
    <div className="container profileContainer">
      <Sidebar />

      <ProfileInfo />
    </div>
  );
}

export default Profile;
