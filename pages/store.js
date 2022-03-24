import BannerStore from "../components/partials/bannerstore";
import Footer from "../components/partials/footer";
import Header from "../components/partials/header";
import Shopping from "../components/shopping";
import Layout from "../components/partials/layout";

export default function Store() {
  return (
    <Layout>
      <BannerStore/>
      <Shopping />
    </Layout>
  );
}
