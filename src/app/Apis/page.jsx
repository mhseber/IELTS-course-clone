import Banner from "@/Components/Banner";

export const dynamic = "force-dynamic"; // live data fetch

async function getData() {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
    { cache: "no-store" }
  );
  const json = await res.json();
  return json.data;
}

const HomePage = async () => {
  const data = await getData();

  return (
    <main>
      <Banner
        title={data.title}
        description={data.description}
        ctaText="Enroll Now"
      />
    </main>
  );
};

export default HomePage;
