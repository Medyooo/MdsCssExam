import Navbar from '../components/utils/Navbar'
import HeroSection from '../components/HeroSection'
import Solutions from '../components/Solutions'
import Customization from '../components/Customization'
import Discover from '../components/Discover'
import Footer from '../components/utils/Footer'

const IndexPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Solutions/>
      <Customization/>
      <Discover/>
      <Footer/>
    </div>  

  )
}

export default IndexPage
