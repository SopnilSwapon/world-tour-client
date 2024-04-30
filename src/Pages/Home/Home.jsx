import Banner from "../Banner/Banner";
import TouristsSpots from "../TouristsSpots/TouristsSpots";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Countries from "./Countries/Countries";
import { RiArrowDropDownLine } from "react-icons/ri";


const Home = () => {
    const { touristsSpots, loader } = useContext(AuthContext);
    const sixTouristsSpots = touristsSpots.slice(0, 6);
    const [countriesSpots, setCountriesSpots] = useState([])

    useEffect(() => {
        fetch('https://world-tour-server-ten.vercel.app/countries')
            .then(res => res.json())
            .then(data => {
                setCountriesSpots(data)


            })
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-4xl text-center text-purple-600 font-bold my-10">Tourists Spots</h2>
                {
                    loader ? <div className="w-5 mx-auto"><span className="loading loading-bars  loading-lg"></span></div> : <p></p>
                }
                <div className="grid grid-cols-1 mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">

                    {
                        sixTouristsSpots.map(spot => <TouristsSpots
                            key={spot._id}
                            spot={spot}

                        ></TouristsSpots>)
                    }
                </div>
                {/* countries spots */}
                <div>
                    <div className="bg-gray-400 py-2 my-10 shadow-lg rounded-lg">
                    <h2 className="text2xl md:text-3xl lg:text-4xl text-center text-purple-600 mt-5 font-bold">Explore More Country For Tourism Spots</h2>
                    <RiArrowDropDownLine className=" mx-auto font-semibold text-4xl bg-purple-500 rounded-full mt-2"></RiArrowDropDownLine>
                    </div>
                    <div className="grid grid-cols-1 mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                    
             {
                countriesSpots.map(spot => <Countries
                key={spot._id}
                spot={spot}
                ></Countries>)
             }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;