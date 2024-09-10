import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";

const apiData = process.env.NEXT_PUBLIC_BASE_API_URL;

export default async function Home({ params: { lang } }) {
  const response = await fetch(`${apiData}/photos`);
  const photos = await response.json();

  return (
    <main className=" md:px-24 px-1">
      <PhotoList photos={photos} />
    </main>
  );
}
