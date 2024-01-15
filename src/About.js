import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {

    useProductContext();

    return(
        <>
            <HeroSection/>
        </>
    );
}
 
export default About;