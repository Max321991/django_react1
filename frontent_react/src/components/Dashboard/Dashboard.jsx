// import React from 'react'
import "../../assets/css/style.css";
import {useEffect} from 'react'
import axiosInstance from "../../axiosInstance";

const Dashboard = () => {
    // const accessToken = localStorage.getItem('access_token')
    useEffect(() => {
        const fetchProtectedData = async () =>{
            try{
                const response = await axiosInstance.get('/protected-view/')
                console.log('Success', response.data);

            }catch(error){
                console.error('Error fetching data', error)
            }
        }
        fetchProtectedData();
    }, [])
  return (
    <>
      <div className='container max'>
            <div className='text-light'><h2 className="text-center p-3">Dashboard</h2></div>
            <p className='text-light p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis alias molestiae fugiat. Mollitia veniam natus facilis possimus suscipit, quidem accusantium laudantium tempora, similique, soluta fuga exercitationem. Ratione soluta totam harum.</p>
            <p className='text-light p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis alias molestiae fugiat. Mollitia veniam natus facilis possimus suscipit, quidem accusantium laudantium tempora, similique, soluta fuga exercitationem. Ratione soluta totam harum.</p>
      </div>
        
    </>
    
  )
}

export default Dashboard