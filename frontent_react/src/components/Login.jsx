import { useState, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {

      const [username, setUsename] = useState('')
      const [password, setPassword] = useState('')
      const [errors, setErrorrs] = useState('')
      // const [success, setSuccess] = useState(false)
      const [loadding, setLoadding] = useState(false)
      const navigate = useNavigate()
      const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

      const handleLogin = async (e) =>{
        e.preventDefault()
        setLoadding(true)

        const userData = {username, password}
        console.log("userData==>", userData)

        try{
           const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
           localStorage.setItem('accessToken', response.data.access)
           localStorage.setItem('refreshToken', response.data.refresh)
           console.log('Login successfully');
           setIsLoggedIn(true)
           navigate('/')
          

        }catch(error){
          setErrorrs("Invailid usename and password")
          console.log("Invailid usename and password")
        }finally{
            setLoadding(false)
        }

      }

  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 for-deg'>
                <h3 className='text-light text-center'>Login Form</h3>
                <form onSubmit={handleLogin}>
                  <div className='mb-3'>
                    <input type='text' className='form-control' placeholder='Username' value={username} onChange={(e) => setUsename(e.target.value)} />
                    {/* <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small> */}
                  </div>

                  <div className='mb-3'>
                    <input type='password' className='form-control' placeholder='password please' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {/* <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small> */}
                  </div>

                    <small>{errors && <div className="alert alert-danger" role="alert">{errors}</div>}</small>

                  {loadding ? (
                    <button type='submit' className='btn btn-primary d-block mx-auto '>Please Wait...</button>
                  ) : (
                      <button type='submit' className='btn btn-primary d-block mx-auto '>Login Now</button>
                  )}
                    
                </form>
            </div>

        </div>

    </div>
    </>
  )
}

export default Login