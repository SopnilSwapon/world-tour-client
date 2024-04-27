import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const spot = useLoaderData();
    const { country, spots, location, description, cost, session, time, visitors, photo } = spot;

    console.log(spot);
    return (
        <div>
            <h2 className="text-3xl text-gray-600 font-bold mb-5 text-center">Spots: {spots}</h2>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="overflow-auto w-full h-[500px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Country:  {country}
                    </h2>
                    <p>{description}</p>
                    <p><span className="font-bold">Location:</span> {location}</p>
                    <div className="flex sm:flex-row justify-around">
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline p-5 badge-error font-semibold">Cost : {cost}$</div>
                        <div className="badge badge-outline badge-info p-5 font-semibold">Visitors : {visitors}</div>
                     </div>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline p-5 font-semibold badge-secondary">Session : {session}</div>
                        <div className="badge badge-outline badge-primary p-5 font-semibold">Time: {time}</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
    );
};

export default ViewDetails;