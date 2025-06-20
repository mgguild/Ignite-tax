import AboutUs from "./about/AboutUs";
import Home from "./components/Home";
import Product from "./product/Product";
import Resources from "./resources/Resoruces";


export default function Hero() {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="about_us">
        <AboutUs />
      </div>
      <div id="product">
        <Product />
      </div>
      <div id="resources">
        <Resources />
      </div>
    </>
  )
}
