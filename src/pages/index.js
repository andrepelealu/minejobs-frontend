import Head from "next/head";
import Nav from '../parts/Nav'
import Hero from '../parts/Hero'
import Lowongan from '../parts/LowonganPart'
import Footer from '../parts/Footer'
function Home() {
  return (
    <>
      <Head>
        <title>Minejobs</title>
      </Head>
      <Nav/>
      <main>
      <Hero/>
      <Lowongan/>
      </main>
      <Footer/>
    </>
  );
}

export default Home;
