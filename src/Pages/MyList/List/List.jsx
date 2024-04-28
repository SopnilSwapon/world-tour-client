import { MdEditSquare } from "react-icons/md";
const List = ({ spot }) => {
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
                                <MdEditSquare></MdEditSquare>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 text-error font-semibold rounded-md dark:bg-violet-600 btn btn-sm dark:text-gray-50">
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