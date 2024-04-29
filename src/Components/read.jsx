import{ useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios';

const Read = () => {
const [data,setData]=useState([])
const {address}=data
const firstcity=address?address.city : ''


  const {id}=useParams()
console.log(id)
useEffect(()=>{
  const getUser=async()=> {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      console.log(id)
      setData(response.data) //passing  the data to state variable
    } catch (error) {
      console.error(error);
    }
  }
  getUser() // calling the user function

  // cleanup function
  return ()=>{}

},[]);

  return (
    <div className='container my-auto border border-dark p-5 shadow d-flex justify-content-center'>
<div class="card text-center h-50 w-50 " >
<i class="bi bi-person-circle"></i>
  <div class="card-body">
    <h5 class="card-title">👨username:{data.username}</h5>
    <p class="card-text">💌mail:{data.email}</p>
    <p class="card-text">☎Phone:{data.phone}</p>
    <p class="card-text">🏙City :{firstcity}</p>
    <Link to='/' className="btn btn-danger" type="button">Back</Link>
  </div>
</div>
</div>  
  )
}

export default Read
