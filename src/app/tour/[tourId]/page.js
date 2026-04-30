import TourDetails from "@/templates/TourDetails";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:6500/tour", {
    // cache: "no-store",
  });
  const tours = await res.json();

  const params = tours.map((tour) => ({
    tourId: String(tour.id),
  }));

  return params;
}

async function TourDetailsPage({ params }) {
  const res = await fetch(`http://localhost:6500/tour/${params.tourId}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div>
      <TourDetails data={data} />
    </div>
  );
}

export default TourDetailsPage;
