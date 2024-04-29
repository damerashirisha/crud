import {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// base_Url =http://localhost:3000/user
const Table = () => {
const [data,setData]=useState([])

useEffect(()=>{
  const getUser=async()=> {
    try {
      const response = await axios.get('http://localhost:3000/user');
      setData(response.data) //passing  the data to state variable
    } catch (error) {
      console.error(error);
    }
  }
  getUser() // calling the user function

  // cleanup function
  return ()=>{}

},[]);

// function to delete the values
const handleDelete=async(id)=>{
  const confirm=window.confirm('are u sure deleting it🤦‍♀️')
  if(confirm){
    try {
      const response = await axios.delete(`http://localhost:3000/user/${id}`);
     console.log(response)
        
     toast.success('user deleted sucessfully',{
      // className:'toast',  -- optional
      position:'top-right',
      autoClose:3000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true

     })
      location.reload()
    } catch (error) {
      console.error(error);
      toast.error('user failed to delete')
    }
  }
}


  return (
    <div className='table-responsive text-center  my-auto rounded shadow'>
     <Link to='/create' className='btn btn-success' >🖋CREATE</Link>
      <table className='table  table-dark table-hover'>
      <thead>
        <tr>
          <th scope="col">SNO</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">MobileNo</th>
          <th scope="col">Address</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
         {
          data.map((items,i)=>(
            <tr key={i}>
              <td>{items.id}</td>
              <td>{items.username}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>
              <td>{items.address.city}</td>
              <td>
              <Link to={`/read/${items.id}`} class="btn btn-success mx-1" type="button">Read</Link>
              <Link  to={`/update/${items.id}`} class="btn btn-warning mx-1" type="button">Update</Link>
              <button onClick={e=>handleDelete(items.id)} class="btn btn-danger mx-1" type="button">Delete</button>
              </td>
            </tr>
          ))
         }
      </tbody>
      </table>
    </div>
  )
}

export default Table
