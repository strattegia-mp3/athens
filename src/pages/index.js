import Head from "next/head";
import Navbar from "@/components/navbar";
import Banner from "@/sections/banner";
import About from "@/sections/about";
import Learn from "@/sections/cards-learn";
import Methods from "@/sections/methods";
import Reviews from "@/sections/reviews";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Athens</title>
      </Head>

      <Navbar />

      <main>
        <Banner />
        <About />
        <Learn />
        <Methods />
        <Reviews />
      </main>

      <Footer />
    </>
  );
}
