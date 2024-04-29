import PropTypes from 'prop-types'; // ES6
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const TouristsSpots = ({spot}) => {
    const {photo, country, cost, visitors, _id} = spot;
    const {users } = useContext(AuthContext);
    return (
        <div>
            <div className="card glass">
                <figure><img src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{country}</h2>
                     <div className="card-actions">
                    <div className="badge badge-outline p-5 badge-warning font-semibold">Cost : {cost}</div>
                    <div className="badge badge-outline badge-info p-5 font-semibold">Visitors : {visitors}</div>
                 </div>
                    <div className="card-actions justify-start">
                    <NavLink to={users ? `/viewDetails/${_id}` : '/login'}><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white">view details</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristsSpots;
TouristsSpots.propTypes = {
    spot: PropTypes.object
}