import React,{useState,useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

const DetailUser=()=>{

    const [user, setstate] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const {id}=useParams();

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async()=>{
        let baseUrl='http://localhost:3000/users';
        const res=await axios.get(baseUrl+'/'+id);
        setstate(res.data);
    }

    console.log(getUserDetails());

    return (
        <div>
             <div className="container">
                <h5 className="mt-4">Detail User</h5>
                <Link className="btn btn-primary mb-4 mt-4" to="/">Back to home</Link>

                <ul class="list-group w-50">
                   <li class="list-group-item"> Name: {user.name}</li>
                   <li class="list-group-item"> Username: {user.username}</li>
                   <li class="list-group-item"> Email: {user.email}</li>
                   <li class="list-group-item"> Phone: {user.phone}</li>
                   <li class="list-group-item"> Website: {user.website}</li>
                </ul>
             </div>
        </div>
      )
}

export default DetailUser