import {useState,useEffect} from 'react'
import { useParams ,Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Update = () => {
  const [values, setvalues] = useState({
    name:'',
    username: '',
    email: '',
    address: {
      city: ''
    },
    phone: '',

  })

const {id}=useParams()
console.log(id)
useEffect(()=>{
  const getUser=async()=> {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      console.log(id)
      setvalues(response.data) //passing  the data to state variable
    } catch (error) {
      console.error(error);
    }
  }
  getUser() // calling the user function

  // cleanup function
  return ()=>{}

},[]);

// function for  upadting the values
const navigate=useNavigate()
  // function for handling the form submission
  const HandleUpdate=async(e)=>{
       e.preventDefault()
       try {
        const response = await axios.put(`http://localhost:3000/user/${id}`,values);
       console.log(response)
       toast.success('user upated sucessfully',{
        // className:'toast',  -- optional
        position:'top-right',
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true

       })
       navigate('/')
      } catch (error) {
        console.error(error);
        toast.error('user failed to update')
      }
  }



  return (
    <div className='container my-auto border border-dark p-5 shadow'>
      <form className="row g-3" onSubmit={HandleUpdate}>
        <div className="col-md-12">
          <label htmlFor="Username" className="form-label">Username</label>
        <input type="text"
         className="form-control" 
         id="Username"
         value={values.username}
          onChange={(e)=>setvalues({...values,username:e.target.value})} />
        </div>
        <div className="col-md-12">
          <label htmlFor="Useremail" className="form-label">Email</label>
          <input type="email" 
          className="form-control" 
          id="Useremail"
          value={values.email}
          onChange={(e)=>setvalues({...values,email:e.target.value})} />
        </div>
        <div className="col-md-12">
          <label htmlFor="Mobileno" className="form-label">MobileNo</label>
          <input type="tel"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St" 
          value={values.phone}
          onChange={(e)=>setvalues({...values,phone:e.target.value})}/>
        </div>
        <div className="col-md-12">
          <label htmlFor="inputAddress2" className="form-label">Address </label>
          <input type="text" 
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
          value={values.address.city}
          onChange={e=>setvalues({...values,address:{...values.address,city:e.target.value}})} 
          />
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-center ">
          <button className="btn btn-success" type="submit">Update</button>
          <Link to='/' className="btn btn-danger" type="button">Back</Link>
        </div>

      </form>

    </div>
  )
}

export default Update
