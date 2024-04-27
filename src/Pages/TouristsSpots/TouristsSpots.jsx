import PropTypes from 'prop-types'; // ES6
import { NavLink } from 'react-router-dom';

const TouristsSpots = ({spot}) => {
    const {photo, country, description, _id} = spot
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{country}</h2>
                    
                        {
                            description.length > 10 ? <p>{description.slice(0, 160)}</p> : <p>{description}</p>
                        }
                    
                    <div className="card-actions justify-end">
                    <NavLink to={`/viewDetails/${_id}`}><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white">view details</button></NavLink>
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