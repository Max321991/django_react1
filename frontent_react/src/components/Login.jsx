import React from 'react'

const Login = () => {
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 for-deg'>
                <h3 className='text-light text-center'>Login Form</h3>
                <form>
                    <input type='text' className='form-control mb-3' placeholder='Username' />
                    <input type='email' className='form-control mb-3' placeholder='Email Please' />
                    <input type='password' className='form-control mb-3' placeholder='password please' />
                    <button type='submit' className='btn btn-primary d-block mx-auto '>Login Now</button>
                </form>
            </div>

        </div>

    </div>
    </>
  )
}

export default Login