import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import Layout from '../components/partials/layout'
import Banner from '../components/partials/banner'
import Sponsor from '../components/sponsor'
import Intro from '../components/ads'
import Blog from '../components/blog'


export default function Home() {
  return (
    <Layout>
        <Banner/>
        <Sponsor/>
        <Intro/>
        <Blog/>
    </Layout>
  )
}
