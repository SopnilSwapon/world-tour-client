import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const CountrySpot = ({spot}) => {
    const {spots, location, _id, cost, session, photo } = spot;

    return (
        <div>
             <div className="card bg-sky-200 shadow-xl pt-24 text-gray-600 h-[600px]">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold mb-5">Spots: {spots}</h2>
                <p><span className="font-bold">Average Cost:</span> {cost}$</p>
                <p><span className="font-bold">Location:</span> {location}</p>
                <p><span className="font-bold">Session :</span> {session}</p>
                <div>
                <NavLink to={`/viewDetails/${_id}`}><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white">view details</button></NavLink>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CountrySpot;
CountrySpot.propTypes = {
    spot: PropTypes.object
}