import { useLoaderData} from "react-router-dom";
import CountrySpot from "../CountrySpot/CountrySpot";

const CountrySpots = () => {
    const countryData = useLoaderData()

    return (
        <div className="pt-24">
            <h2 className="text-purple-600 text4x font-bold text-center">Here are some special spots of the Country</h2>
        {
        countryData.map(spot => <CountrySpot
        key={spot._id}
        spot={spot}
        ></CountrySpot>)
        }
        </div>
    );
};

export default CountrySpots;