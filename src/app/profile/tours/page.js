import Sidebar from "@/modules/Sidebar";
import UserTours from "@/modules/UserTours";

function UserToursPage() {
  return (
    <div className="container profileContainer">
      <Sidebar />

      <UserTours />
    </div>
  );
}

export default UserToursPage;
