import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Spots from "./Spots";
import { MdArrowDropDown } from "react-icons/md";

const AllTouristsSpots = () => {
    const [sortActive, setSortActive] = useState(false)
    const { touristsSpots } = useContext(AuthContext);
    const sortedSpotsByCost =[...touristsSpots].sort((place1, place2) => {
        return parseInt(place1.cost) - parseInt(place2.cost)
    })
    const handleSorting = () => {
        setSortActive(!sortActive);
    }
    return (
        <>
            <div className="w-[20%] mx-auto mt-2 mb-8 pt-24">
                <div className="dropdown">
                        <div tabIndex={0} role="button" className="badge badge-outline p-4 badge-secondary">
                            <h2 className="text-purple-600 font-bold">Sort By</h2>
                            <MdArrowDropDown className="text-3xl font-bold"></MdArrowDropDown>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] shadow bg-base-100 rounded-box w-40">
                        <button onClick={handleSorting} className="badge badge-outline mb-2 badge-primary font-semibold">Average Cost</button>
                    <button className="badge badge-outline badge-secondary font-semibold">Visitors</button>
                        </ul>
                    </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {
                sortActive ?
                <> 
                {
                    sortedSpotsByCost.map(spot => <Spots 
                    key={spot._id}
                    spot={spot}
                    ></Spots>)
                }
                </>
                : 
                <>
                {
                    touristsSpots.map(spot => <Spots
                        key={spot._id}
                        spot={spot}
                    ></Spots>)
                }
                </>
              
                }
               
            </div>
        </>
    );
};

export default AllTouristsSpots;