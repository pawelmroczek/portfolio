import Header from "@/components/Header";
import Umiejetnosci from "@/components/Umiejetnosci";
import Wyksztalcenie from "@/components/Wyksztalcenie";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Header />
    <Wyksztalcenie/>
    <Umiejetnosci/>
   </main>
  );
}
