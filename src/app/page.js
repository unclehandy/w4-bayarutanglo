import Header from "@/components/header";
import { Hero } from "@/components/hero";
import { Table } from "@/components/table";
import { Modal } from "@/components/modal";

export const dynamic = "force-dynamic";

async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/QvRMiuwGcYG3");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();

  return (
    <main className="h-screen">
      <Header />
      <Modal />
      <Hero />
      <Table data={data} />
    </main>
  );
}
