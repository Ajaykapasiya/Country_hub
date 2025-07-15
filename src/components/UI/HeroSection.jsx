import { FaLongArrowAltRight} from "react-icons/fa";


export const HeroSection = () =>{
    return  (
        <main className="hero-section main">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1 className="heading-xl">
                Explore the world, One Country at a Time.
              </h1>
              <p className="parahraph">
                Discover the History, Culture, and Beauty of every nation. Sort,
                search, Filter through countries to find the details you.
              </p>
              <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <FaLongArrowAltRight />
              </button>
            </div>
            <div className="hero-image">
              <img
                className="banner-image"
                src="/images/world.png"
                alt="world beauty"
              />
            </div>
          </div>
        </main>
      );
}