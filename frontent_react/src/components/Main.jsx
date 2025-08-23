
import Button from './Button'


const Main = () => {
  return (
   <>
   <div className='container'>
    <div className='p-5 text-center bg-light-dark'>
      <h1 className='text-light'>Stock Predication Portal</h1>
      <p className='text-light lead'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, inventore aliquid dolores similique quam quisquam, doloremque esse expedita consectetur, est dolore. Sequi perferendis illo hic possimus nihil exercitationem quod est?
      </p>
      <Button class="btn-outline-warning" text="Explore Here" url="/"/>
      {/* <a className='btn btn-outline-info' href=''>Explore Here</a> */}
      {/* <Link to=''>helooooo</Link> */}

    </div>
      
   </div>
   </>
  )
}

export default Main