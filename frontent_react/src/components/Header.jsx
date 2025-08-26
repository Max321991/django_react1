import { useContext } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')

  }
  return (
    <>
    <nav className='navbar container pt-4 pb-3 align-items-start'>
       <Link className='navbar-brand text-light' to="/"><b><span style={{"color":"#ff0000ff","fontSize":'2rem'}}>St</span><span style={{"color":"#1100ffff"}}>ock</span> <span style={{"color":"#ffffffff"}}>Predection</span></b></Link> 
       <div>
       {isLoggedIn ? (
        <>
          <Button text='Dashboard' class="btn-outline-info me-2" url="/dashboard" />
          <button className="btn btn-danger" onClick={handleLogout}  >Loggout</button>
           
        </>
        
       ) : (
        <>
          <Button text='Login' class="btn-outline-info" url="/login" />
          &nbsp;
          <Button text='Register' class="btn-info" url="/register" />
        </>

       )}
      </div>
    </nav>
    </>
  )
}

export default Header