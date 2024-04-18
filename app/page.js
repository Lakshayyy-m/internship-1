import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "@/Components/LandingPage";
import Cards from "@/Components/Cards";
import AddNew from "@/Components/AddNew";
import Testimonials from "@/Components/Testimonials";
import GetStarted from "@/Components/GetStarted";
import ScrollToTop from "@/Components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <ScrollToTop />
      <section className="bg-second ">
        <LandingPage />
      </section>
      <section>
        <Cards />
      </section>
      <section className="bg-addNew">
        <AddNew />
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="bg-addNew mt-5">
        <GetStarted />
      </section>
    </main>
  );
}
