import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Container from "./components/Container"
import Footer from "./components/Footer"

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Container />
    <Footer />
    </>
  );
}
