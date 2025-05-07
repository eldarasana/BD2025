import { useNavigate } from 'react-router-dom'
import Delete from './buttons/Delete'
import '../styles/elements/rgb_card.css'

export default function UserComponent({ user_state }) {

    const navigator = useNavigate()

    function navigate(route) {
        navigator(route)
    }

    return (
        <>




            <div className="rgb-card">
                <p className="heading">{user_state.name}</p>
                <p>Age : {user_state.age}</p>
                <p>Id : {user_state.id}</p>
            </div>

            <div className='card-btn-container'>
                <div className='subdivider'>
                    <div className='rgb-container'>
                        <button onClick={() => navigate(`/edit_user/${user_state._id}`)}>Edit</button>
                    </div>
                </div>

                <div className='subdivider'>
                    <div className='rgb-container'>
                        <Delete del_id={user_state._id} type='users' />
                    </div>
                </div>
            </div>



        </>
    )
}