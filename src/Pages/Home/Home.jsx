import AboutUs from "../../Components/About Us/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Products from "../../Components/Products/Products";
import Testimonial from "../../Components/Testimonial/Testimonial";
import WhyUs from "../../Components/Why Us/WhyUs";
import SectionHead from "../../Shared/Section Head/SectionHead";

const Home = () => {
    return (
        <>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Products></Products>
            </section>
            <section>
                <WhyUs></WhyUs>
            </section>
            <section>
                <Testimonial></Testimonial>
            </section>
            <section>
                <AboutUs></AboutUs>
            </section>
        </>
    );
};

export default Home;