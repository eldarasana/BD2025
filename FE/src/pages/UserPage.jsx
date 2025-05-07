import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserComponent from '../components/UserComponent.jsx'
import '../styles/UserPage.css';

export default function User(){
    const { id } = useParams()
   
    // FETCH ID
    const type='users'
    const [obj_state , set_obj_state] = useState(null);
    useEffect(()=>{
        async function get_obj_data(){
            try {
                const response = await fetch(`http://localhost:5000/api/users/${id}`)
                const data = await response.json()
                if (response.ok) {
                    set_obj_state(data)
                }else{
                    alert('Fetching data failed...')
                }
            } catch (error) {
                console.error(error)
            }
        }
        get_obj_data()
    },[type, id])
    // FETCH ID

    let display_user


    if(obj_state){
        display_user = <UserComponent user_state={obj_state} />
    }else{ 
        display_user=<p>Loading...</p>
    }

    return(
        <>
            <div className='users-container'>
                <h1 className='display-user-header'>DISPLAY USER</h1>
                <div className='display-user-component-wrapper'>{display_user}</div>
            </div>
  
        </>
    )
}