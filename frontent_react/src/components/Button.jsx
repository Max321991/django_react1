import { Link } from "react-router-dom"



const Button = (propes) => {
  return (
    <>
      <Link className={`btn ${propes.class}`} to={propes.url}>{propes.text}</Link>
    </>
    
  )
}

export default Button