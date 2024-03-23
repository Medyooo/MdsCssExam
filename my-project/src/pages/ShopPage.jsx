import ShopHero from "../components/ShopHero"
import StoreSection from "../components/StoreSection"
import Footer from "../components/utils/Footer"
import Navbar from "../components/utils/Navbar"

const ShopPage = () => {
  return (
    <>
      <Navbar/>
      <div className="p-10 ">
       <ShopHero/>
       <StoreSection/>
      </div>
      <Footer/>
    </>
  )
}

export default ShopPage
