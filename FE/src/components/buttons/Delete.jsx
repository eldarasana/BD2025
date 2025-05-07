import { useNavigate } from "react-router-dom"


export default function Delete({del_id, type}){

    const navigator = useNavigate()

    async function del(g_del_id){
        try {
            const response = await fetch(`http://localhost:5000/api/${type}/${g_del_id}`, {
                method:'DELETE' ,
                headers:{
                    'Content-Type':'application/json',
                },
            })
            if (response.ok) {
                alert('Object removed')
                navigator('/')
            }else{
                alert('Delete request failed...')
            }
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <button onClick = { () => del(del_id) }>Delete</button>
    )
}