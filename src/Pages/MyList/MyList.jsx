import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import List from "./List/List";

const MyList = () => {
    const { listedSpots } = useContext(AuthContext);
    console.log(listedSpots);
   
    return (
        <>
            <h2 className="text-3xl text-center text-purple-400 font-bold">I Will Visit These Famous Spots</h2>
            <p className="w-[96%] md:w-[90%] lg:w-[80%] mx-auto text-center text-gray-500">
                Urban Majesty Awe-inspiring heights, a symphony of steel and glass. Amidst the chaos, harmony reigns.
                Natures Embrace Crisp air, ablaze with autumns hues. Serenity found amidst rugged peaks.
                Architectural Marvels Bold designs, vibrant colors. Each building a story, amidst the bustling streets.</p>
            <div className="bg-black text-white rounded-lg mt-5">
                <table className="table table-xs">
                    <thead>
                        <tr className="text-xl text-white">
                            <th className="p-3">Country</th>
                            <th className="p-3">Spots</th>
                            <th className="p-3 text-right">Cost</th>
                            <th className="p-3 text-right">Update</th>
                            <th className="p-3 text-right">Delete</th>
                        </tr>
                    </thead>
                </table>
                <div>
                    {
                        listedSpots?.map(spot => <List
                            key={spot._id}
                            spot={spot}
                        ></List>)
                    }
                </div>
            </div>
        </>
    );
};

export default MyList;