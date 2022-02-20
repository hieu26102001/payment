import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <div className="font-Notosans mx-auto relative">
            <Header/>
                {children}
            <Footer/>
        </div>
    )

}