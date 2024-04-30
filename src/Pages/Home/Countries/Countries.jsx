import { Link } from "react-router-dom";
import ProTypes from 'prop-types'

const Countries = ({spot}) => {

        return (
        <div>
       <Link to={`/countries/${spot.country}`}>
       <div className="rounded-md shadow-md h-[500px] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 dark:text-gray-800">
	<img src={spot.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 duration-1000" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{spot?.country}</h2>
			<p className="dark:text-gray-800">{spot?.description}</p>
		<button type="button" className="badge badge-outline border-4 font-semibold text-2xl p-5 border-yellow-300 bg-white text-purple-700">SEE MORE</button>
		</div>
	</div>
</div>
       </Link>
        </div>
    );
};

export default Countries;
Countries.propTypes = {
    spot: ProTypes.object
}