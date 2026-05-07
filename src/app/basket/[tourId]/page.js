import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import BasketPage from "@/templates/BasketPage";

import { serverFetch } from "@/lib/serverApi";

async function Basket({ params }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log(accessToken);

  if (!accessToken) {
    redirect("/");
  }

  const data = await serverFetch(`/tour/${params.tourId}`);

  return (
    <div>
      <BasketPage data={data} />
    </div>
  );
}

export default Basket;
