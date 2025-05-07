import { useNavigate } from 'react-router-dom'
import Delete from './buttons/Delete'

export default function GameComponent( { game_state } ){

    const navigator = useNavigate()

    function navigate(route){
        navigator(route)
    }

    return(
        <>

        <div className="rgb-card">
            <p className="heading">{game_state.title}</p>
            <p>Genre: {game_state.genre}</p>
            <p>Release : {game_state.releaseDate.split("T")[0]}</p>
            <p>Id : {game_state._id}</p>
        </div>

        <div className='card-btn-container'>
            <div className='subdivider'>
                <div className='rgb-container'>
                    <button 
                        onClick={ ()=> navigate(`/edit_game/${game_state._id}`) }>Edit</button>
                </div>
            </div>

            <div className='subdivider'>
                <div className='rgb-container'>
                    <Delete del_id={game_state._id} type='games'/>
                </div>
            </div>
        </div>

        </>
    )
}