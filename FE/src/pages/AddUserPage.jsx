import { useState } from 'react';
import Save from '../components/buttons/Save';
import '../styles/AddUserPage.css';
// import AddUserIcon from '../assets/add_user.png'; // Adjust the path

export default function AddUser(){

    const [ user_obj_state, set_user_obj_state] = useState( {name:'', age:0})


    return (
        <>
            <div className='h1-wrapper-wrapper'>
                <h1 className='h1-wrapper'>ADD USER PAGE</h1>
            </div>
            <div className='add-user-form-wrapper'>
            <div className='simple-input-wrapper'>
                    <div className="input-group">
                    <input required="" type="text" name="text" autoComplete="off" className="input"
                        onChange= {(e)=>{ set_user_obj_state( (state) => {return {...state, name:e.target.value }})}}
                        value={user_obj_state.name}  
                    />
                    <label className="user-label">Name</label>
                    </div>
                </div>
                <div className='age_part_wrapper'>
                    <label className='num_change_label'>Age</label>
                    <div className='plus-minus-wrapper'>
                        <div className='rgb-container-wrapper'>
                            <div className='rgb-container'>
                                <button 
                                onClick={ (e)=>{ set_user_obj_state(  (state) => {return {...state, age:state.age+1}})}}>+</button>
                            </div>
                        </div>
                        <div className='span-wrapper'>
                            <span> {user_obj_state.age}</span>
                        </div>
                        <div className='rgb-container-wrapper'>
                            <div className='rgb-container'>
                                <button 
                                onClick={ (e)=>{ set_user_obj_state(  (state) => { return {...state, age:state.age-1}})}}>-</button>
                            </div>
                        </div>
                        <Save obj_state={user_obj_state} type='users'/>
                    </div>
                </div>
            </div>

            {/* <div className='add-user-icon-wrapper'>
                <img src={AddUserIcon} alt="Description" />
            </div> */}

        </>
    )
}