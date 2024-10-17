import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Brands from "./components/Brands";
import NewArrivals from "./components/NewArrivals";
import Banner from "./components/Banner";
import YoungsFavourite from "./components/YoungsFavourite";
import DownloadApp from "./components/DownloadApp";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div className="mx-[65px] my-10">
        <NavBar />
        <HeroSection />
      </div>
      <Brands />
      <div className="mx-[65px] mt-14">
        <NewArrivals />
      </div>
      <div className="my-20">
        <Banner />
      </div>
      <div className="mx-[65px] my-10">
        <YoungsFavourite />
      </div>
      <div className="mx-40 my-14">
        <DownloadApp />
      </div>
      <NewsLetter />
      <Footer />
    </main>
  );
}
