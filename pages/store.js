import BannerStore from "../components/partials/bannerstore";
import Footer from "../components/partials/footer";
import Header from "../components/partials/header";
import Shopping from "../components/shopping";

export default function Store() {
  return (
    <div>
      <Header />
      <BannerStore/>
      <Shopping />
      <Footer/>
    </div>
  );
}
