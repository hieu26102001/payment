import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import Layout from '../components/partials/layout'
import Network from '../components/Popup/Network'
import QR from '../components/Popup/QRCode'
import Success from '../components/Popup/Success'


export default function Home() {
  return (
    <Layout>
  
        <div className='bg-blue-100 py-2'>
          <img className=' mx-auto' src="/Index/Banner.png"/>
        </div>
        <div className='flex'>
          <Network/>
          <QR/>
          <Success/>
        </div>
        
    </Layout>
  )
}
