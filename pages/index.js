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
import Popup from 'reactjs-popup'

export default function Home() {

  return (
    <Layout>
        <Banner/>
        <div className='max-w-[1600px] mx-auto' >
          <Sponsor/>
          <Intro/>
          <Blog/>
        </div>  
    </Layout>
  )
}
