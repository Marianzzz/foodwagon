import Cards from "@/components/Cards";
import Delivery from "@/components/Delivery";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import FlashDeals from "@/components/FlashDeals";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InstallApp from "@/components/InstallApp";
import Instructions from "@/components/Instructions";
import Order from "@/components/Order";
import PopularItems from "@/components/PopularItems";
import Posts from "@/components/Posts";
import SearchFood from "@/components/SearchFood";

export default function Home() {
  return (
    <div className="min-h-screen font-source-sans">
      <main>
        <Header />
        <Delivery />
        <FlashDeals />
        <Instructions />
        <PopularItems />
        <FeaturedRestaurants />
        <SearchFood />
        <Posts />
        <InstallApp />
        <Cards />
        <Order />
        <Footer />
      </main>
    </div>
  );
}
