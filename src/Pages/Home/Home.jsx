import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristsSpots from "../TouristsSpots/TouristsSpots";

const Home = () => {
    const loadedSpots = useLoaderData();
    console.log(loadedSpots);
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-4xl text-center text-purple-600 font-bold my-10">Tourists Spots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-5">
              {
                    loadedSpots.map(spot => <TouristsSpots
                         key={spot._id}
                         spot={spot}
                    
                    ></TouristsSpots>)
                }
              </div>
            </div>
        </div>
    );
};

export default Home;