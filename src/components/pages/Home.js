import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {

     const [userState, setUserState] = useState([]);

     useEffect(() => {
        getUsers();
     }, [])

     const getUsers=async()=>{
         let baseURL='http://localhost:3000/users';
         let result=await axios.get(baseURL);

         setUserState(result.data.reverse());
     }

     const deleteUser=async(id)=>{
        let baseURL='http://localhost:3000/users';
        await axios.delete(baseURL+'/'+id);

        getUsers();
     }


    //  console.log(userState);


    return (
        <div className="container">
            <div className="py-4">
                <h4 className="pb-4">Home Page</h4>

                <table class="table border shadow">
                   <thead class="thead-dark">
                      <tr>
                         <th scope="col">#</th>
                         <th scope="col">Name</th>
                         <th scope="col">Username</th>
                         <th scope="col">Email</th>
                         <th scope="col">Action</th>
                     </tr>
                   </thead>
                 <tbody>
                     {
                         userState.map((user, index) => (
                         <tr>
                            <th scope="row">{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                            </td>
                         </tr>
                         ))
                     }
                </tbody>
               </table>
            </div>
        </div>
      )
}

export default Home