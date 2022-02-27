import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import Layout from '../components/partials/layout'
import Banner from '../components/partials/banner'
import Sponsor from '../components/sponsor'
import Intro from '../components/ads'
import Blog from '../components/blog'
import QR from '../components/Popup/QRCode'
import Success from '../components/Popup/Success'
import Network from '../components/Popup/Network'

export default function Home() {

  return (
    <div>
        <Banner/>
        <Sponsor/>
        <Intro/>
        <Blog/>
       <Network/>
        <Success/>
        <QR/>
    </div>
  )
}
