import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Update from '../components/buttons/Update'
import '../styles/EditUserPage.css'
import '../styles/elements/simple_input.css'

export default function EditUser(){

    const { id } = useParams()
    const [user_state, set_user_state] = useState(null)
  
    
    useEffect(()=>{
        async function get_user_data() {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${id}`);
                const data = await response.json();
                if (response.ok) {
                    set_user_state(data);
                } else {
                    alert('Fetching user data failed...')
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
              }
        }
        get_user_data()
    },[id])

    let display_user
    if(user_state){
        display_user = 
        <div className='card_wrapper'>
            <div className="rgb-card">
            <p className="heading">{user_state.name}</p>
            <p>Age : {user_state.age}</p>
            <p>Id : {user_state.id_}</p>
            </div>
        </div>

    }else{
        display_user = <p>Loading...</p>
    }

    return(
        <>
            <h1 className='edit-user-header'>Edit User</h1>
            {display_user}
            <div className='form-wrapper'>
                <div className='simple-input-wrapper'>
                    <div className="input-group">
                    <input required="" type="text" name="text" autoComplete="off" className="input"
                        onChange={ (e)=>{ set_user_state( state => state ? {...state, name:e.target.value} : state ) } }
                        value={user_state?.name || ''}
                    />
                    <label className="user-label">Name</label>
                    </div>
                </div>
                <div className='age_part_wrapper'>
                    <label className='num_change_label'>New age</label>
                    <div className='plus-minus-wrapper'>
                        <div className='rgb-container-wrapper'>
                            <div className='rgb-container'>
                                <button onClick={ (e)=>{ set_user_state(  (state) => {return {...state, age:state.age+1}})}}>+</button>
                            </div>
                        </div>
                        <div className='span-wrapper'>
                            <span>{user_state?.age || 0}</span>
                        </div>
                        <div className='rgb-container-wrapper'>
                            <div className='rgb-container'>
                                <button onClick={ (e)=>{ set_user_state(  (state) => { return {...state, age:state.age-1}})}}>-</button>
                            </div>
                        </div>
                        <Update updated_obj={user_state} type='users'/>
                    </div>
                </div>
            </div>
            
        </>
    )
}