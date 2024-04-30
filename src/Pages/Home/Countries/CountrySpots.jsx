import { useLoaderData} from "react-router-dom";
import CountrySpot from "../CountrySpot/CountrySpot";

const CountrySpots = () => {
    const countryData = useLoaderData()

    return (
        <div className="pt-24">
            <h2 className="text-purple-600 text-4xl mb-5 font-bold text-center">Here are some special spots of the Country</h2>
        <div className="grid grid-cols-1 mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
        {
        countryData.map(spot => <CountrySpot
        key={spot._id}
        spot={spot}
        ></CountrySpot>)
        }
        </div>
        </div>
    );
};

export default CountrySpots;