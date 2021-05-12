import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function EventPage() {
  const router = useRouter()
  console.log(router.pathname.slug);
  return (
    <Layout title="Single Event | Slug">
      <h1>Single Event Page</h1>
    </Layout>
  );
}
