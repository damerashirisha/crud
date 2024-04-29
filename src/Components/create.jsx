import { useState } from 'react'
import axios from 'axios';
import { Link ,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
  const [values, setvalues] = useState({
    name:'',
    username: '',
    email: '',
    address: {
      city: ''
    },
    phone: '',

  })
  const navigate=useNavigate()
  // function for handling the form submission
  const HandleSubmit=async(e)=>{
       e.preventDefault()
       try {
        const response = await axios.post('http://localhost:3000/user',values);
       console.log(response)
       toast.success('user created sucessfully',{
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
        toast.error('user failed to create')
      }
  }

  return (
    <div className='container my-auto border border-dark p-5 shadow'>
      <form className="row g-3" onSubmit={HandleSubmit}>
        <div className="col-md-12">
          <label htmlFor="Username" className="form-label">Username</label>
        <input type="text"
         className="form-control" 
         id="Username"
          onChange={(e)=>setvalues({...values,username:e.target.value})} />
        </div>
        <div className="col-md-12">
          <label htmlFor="Useremail" className="form-label">Email</label>
          <input type="email" 
          className="form-control" 
          id="Useremail"
          onChange={(e)=>setvalues({...values,email:e.target.value})} />
        </div>
        <div className="col-md-12">
          <label htmlFor="Mobileno" className="form-label">MobileNo</label>
          <input type="tel"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St" 
          onChange={(e)=>setvalues({...values,phone:e.target.value})}/>
        </div>
        <div className="col-md-12">
          <label htmlFor="inputAddress2" className="form-label">Address </label>
          <input type="text" 
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
          onChange={e=>setvalues({...values,address:{...values.address,city:e.target.value}})} 
          />
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-center ">
          <button className="btn btn-success" type="submit">Submit</button>
          <Link to='/' className="btn btn-danger" type="button">Back</Link>
        </div>

      </form>

    </div>
  )
}

export default Create
