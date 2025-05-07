export default function Save({obj_state, type}){

    async function save(newObj){
        try {
            const response = await fetch(`http://localhost:5000/api/${type}`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(newObj),
            })
            if (response.ok) {
                alert('Save success')
            }else{
                alert('Save failed')
            }
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <div className='rgb-container'>
            <button  onClick={  ()=>{ save(obj_state)  } } >Save</button>
        </div>
        
    )
}