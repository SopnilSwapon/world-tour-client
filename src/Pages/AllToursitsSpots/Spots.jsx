import PropTypes from 'prop-types'; // ES6
import { NavLink } from 'react-router-dom';

const Spots = ({spot}) => {
    const {spots, location, _id, cost, session, time, visitors, photo } = spot;

    return (
        <div>
        <div className="card bg-base-100 shadow-xl text-gray-600 h-[600px]">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold mb-5">Spots: {spots}</h2>
                <p><span className="font-bold">Average Cost:</span> {cost}$</p>
                <p><span className="font-bold">Location:</span> {location}</p>
                <p><span className="font-bold">Total visitors :</span> {visitors} per year,</p>
                <p><span className="font-bold">Session :</span> {session}</p>
                <p><span className="font-bold">Travel time :</span> {time}</p>
                <div>
                <NavLink to={`/viewDetails/${_id}`}><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white">view details</button></NavLink>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Spots;
Spots.propTypes = {
    spot: PropTypes.object
}