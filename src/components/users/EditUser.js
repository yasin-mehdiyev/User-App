import React,{useState,useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditUser=()=>{

    const [addUser, addUserSetState] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    let {id}=useParams();
    let history=useHistory();

    const {name,username,email,phone,website}=addUser;

    useEffect(() => {
      getUsers();
    }, [])

    const inputChange=(e)=>{
        addUserSetState({...addUser,[e.target.name]:e.target.value});
    }

    const submitHandler= async(e)=>{
        e.preventDefault();
        console.log('yes post request');
        if(name!=='' && username!=='' && email!=='' && phone!=='' && website!==''){
            let baseUrl='http://localhost:3000/users';
            await axios.put(baseUrl+'/'+id,addUser);
            history.push('/');
        }
        else{
            console.log('this is empty datas');
            toast.warning("Please to fill fields !");
        }
    }

    const getUsers=async()=>{
      let baseUrl='http://localhost:3000/users';
      let selectedData = await axios.get(baseUrl+'/'+id);
      addUserSetState(selectedData.data);
    }


    return (
        <div className="container">
             <h5 className="mt-4 mb-4">Add User</h5>

             <form className="w-50" onSubmit={(e)=>submitHandler(e)}>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Name" name="name" value={name} onChange={(e)=>inputChange(e)} />
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Username" name="username" value={username} onChange={(e)=>inputChange(e)}/>
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" placeholder="Email" name="email" value={email} onChange={(e)=>inputChange(e)}/>
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Phone" name="phone" value={phone} onChange={(e)=>inputChange(e)}/>
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Website" name="website" value={website} onChange={(e)=>inputChange(e)}/>
                </div>
                <button type="submit" class="btn btn-primary">Edit Item</button>
            </form>

            <ToastContainer
              autoClose={1500}
              position="bottom-right"
               />
        </div>
      )
}

export default EditUser
