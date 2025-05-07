import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import '../styles/UsersPage.css';
import '../styles/elements/line_button.css';
export default function Games(){


    // FETCH ALL 
    const type = 'games'
    const [obj_state, set_obj_state]=useState([])
    useEffect(()=>{
        async function get_obj_data(){
            try {
                const response = await fetch(`http://localhost:5000/api/${type}`)
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
    },[type])
    // FETCH ALL 



    let games_list_jsx
    if (obj_state.length<1) {
        games_list_jsx = <p>Games list is empty</p>
    }else{
        games_list_jsx= obj_state.map(game => (
            <li key={game._id}>
              <button className="line-button">
                <NavLink to={`/games/${game._id}`} className="btn2">
                  <span className="spn2">{game.title}</span>
                </NavLink>
              </button>
            </li>
          ))
    }
    return(
        <>            
            <div className='users-page-container'> 
                <div className='h1-wrapper'><h1>Games</h1></div>
                <ul>{games_list_jsx}</ul>
            </div>
            
        </>
    )
}
