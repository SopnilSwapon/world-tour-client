import { useContext } from "react";
import { MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import PropTypes from 'prop-types'

const List = ({ spot }) => {
    const {listedSpots} = useContext(AuthContext);
    console.log(listedSpots);
   
    const handleSpotsDelete = () => {

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
          
              fetch(`https://world-tour-server-ten.vercel.app/spots/${spot._id}` , {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  setTimeout(()=>{
                  window.location.reload();
                  }, 1000)
                }
              })
          }
        });
    }
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table ">
                    <tbody>

                        <tr className="border-b text-[14px] font-bold flex justify-between">
                            <td className="p-3">
                                <p>{spot.country}</p>
                            </td>
                            <td className="p-3">
                                <p>{spot.spots}</p>
                            </td>
                            <td className="p-3">
                                <p>{spot.cost}$</p>
                            </td>
                            {/* <td className="p-3">
                                <p className="dark:text-gray-600">{spot.time}</p>
                            </td> */}
                            <td className=" text-purple-500 text-right text-xl badge badge-outline btn">
                                <Link to={`/updateTouristSpot/${spot._id}`}><MdEditSquare></MdEditSquare></Link>
                            </td>
                            <td className="p-3 text-right">
                                <span onClick={handleSpotsDelete} className="px-3 py-1 text-error font-semibold rounded-md dark:bg-violet-600 btn btn-sm dark:text-gray-50">
                                    <span>X</span>
                                </span>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
        
      
    );
};

export default List;
List.propTypes = {
    spot: PropTypes.object
}