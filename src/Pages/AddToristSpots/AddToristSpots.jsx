import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToristSpots = () => {
	const {users} = useContext(AuthContext);
	const email = users?.email;	
    const handleAddTouristSpots = e => {
        e.preventDefault();
        const form = e.target;
        const country = form.country.value;
        const spots = form.spots.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const session = form.session.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const photo = form.photo.value;
        const newSpots = {country, email, spots, location, description, cost, session, time, visitors, photo};
        console.log(newSpots);
		fetch('https://world-tour-server-k7wjqnkwr-sopnil-swapons-projects.vercel.app/spots', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body:JSON.stringify(newSpots)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if(data.insertedId){
				Swal.fire({
					icon: "success",
					title: "YAY",
					text: "This Tour Spots Successfully added!",
			});
			form.reset();
				
			}
		})
    }
    return (
        <div>
            <h2 className="text-3xl text-center font-extrabold text-gray-600 mb-5">Add Your Favorite Tourism Spots</h2>
        <section className="p-6 bg-gray-400 dark:text-gray-900">
	<form onSubmit={handleAddTouristSpots} className="container flex flex-col mx-auto space-y-12">
		<fieldset className="gri grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-200 font-bold">Country Name:</label>
					<input type="text" name="country"  className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-200 font-bold">Spots Name:</label>
					<input type="text" name="spots" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-200 font-bold">Location:</label>
					<input type="text" name="location" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-200 font-bold">Description:</label>
					<input type="text" name="description" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-200 font-bold">Average Cost:</label>
					<input type="text" name="cost" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-200 font-bold">Session:</label>
					<input type="text" name="session" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-200 font-bold">Travel Time:</label>
					<input type="text" name="time" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sky-200 font-bold">Total Visitor Per Years:</label>
					<input type="text" name="visitors" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full ">
					<label htmlFor="firstname" className="text-sky-200 font-bold">Photo URL:</label>
					<input type="text" name="photo" className="w-full pl-3 py-2" />
				</div>
				<div className="col-span-full mx-auto">
                    <button className="btn ghost px-10"><input type="submit" value="Add Spots" />
                    </button>
                </div>
				
			</div>
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default AddToristSpots;