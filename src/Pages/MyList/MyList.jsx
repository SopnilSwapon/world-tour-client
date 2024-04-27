import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyList = () => {
    const {users} = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${users?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    },[users])
    fetch
    return (
        <div>
            wait
        </div>
    );
};

export default MyList;