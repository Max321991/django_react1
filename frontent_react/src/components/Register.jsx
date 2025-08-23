import { useState } from 'react'
import "../assets/css/style.css";
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const [username, setUsename] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrorrs] = useState({})
    const [success, setSuccess] = useState(false)
    const [loadding, setLoadding] = useState(false)

    const handleRegistration = async(e) =>{
        e.preventDefault();
        setLoadding(true)
        const userData = {
            username, email, password
        }
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            console.log('response.data==>', response.data)
            console.log('Registration successfully done')
            setErrorrs({})
            setSuccess(true)
            // userData({" "})
        }catch(error){
            setErrorrs(error.response.data)
            console.log("registration error :", error.response.data)
        }finally{
            setLoadding(false)
        }

    }
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 for-deg'>
                <h3 className='text-light text-center'> Register Form</h3>
                <form onSubmit={handleRegistration}>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Username' value={username} onChange={(e) => setUsename(e.target.value)} />
                        <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                    </div> 
                    <div className='mb-3'>
                        <input type='email' className='form-control' placeholder='Email Please' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                        <small>{errors.email && <div className='text-danger'>{errors.email}</div>} </small>                    
                    </div>
                    
                    <div className='mb-3'>
                        <input type='password' className='form-control' placeholder='password please' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                    </div>

                    <small>{success && <div className="alert alert-success" role="alert">Registration Successfully done</div>}</small>

                    {loadding ? (
                        <button type='submit' className='btn btn-primary d-block mx-auto '>Please wait...</button>
                    ) : (
                        <button type='submit' className='btn btn-primary d-block mx-auto '>Register Now</button>
                    )}
                    
                </form>
            </div>

        </div>

    </div>
    </>
  )
}

export default Register