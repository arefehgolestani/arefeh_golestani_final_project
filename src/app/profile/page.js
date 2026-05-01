import ProfileInfo from "@/modules/ProfileInfo";
import Sidebar from "@/modules/Sidebar";

function Profile() {
  return (
    <div className="container">
      <Sidebar />

      <ProfileInfo />
    </div>
  );
}

export default Profile;
