import Banner from "../../Components/Banner/Banner";
import WhyUs from "../../Components/Why Us/WhyUs";
import SectionHead from "../../Shared/Section Head/SectionHead";

const Home = () => {
    return (
        <>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <WhyUs></WhyUs>
            </section>
        </>
    );
};

export default Home;