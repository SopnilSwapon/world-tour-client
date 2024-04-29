import Banner from "../Banner/Banner";
import TouristsSpots from "../TouristsSpots/TouristsSpots";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Countries from "./Countries/Countries";

const Home = () => {
    const {touristsSpots, loader} = useContext(AuthContext);
    const sixTouristsSpots = touristsSpots.slice(0, 6);
    return (
        <div>
            <Banner></Banner>
            <div>
            <h2 className="text-4xl text-center text-purple-600 font-bold my-10">Tourists Spots</h2>
           {
                loader ?<div className="w-5 mx-auto"><span className="loading loading-bars  loading-lg"></span></div> : <p></p>
            }
              <div className="grid grid-cols-1 mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
              {
                    sixTouristsSpots.map(spot => <TouristsSpots
                         key={spot._id}
                         spot={spot}
                    
                    ></TouristsSpots>)
                }
              </div>
            </div>
            <Countries></Countries>
        </div>
    );
};

export default Home;