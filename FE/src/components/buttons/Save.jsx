export default function Save({ obj_state, type }) {
    async function save(newObj) {
      try {
        // Ensure releaseDate is sent as a string (or explicitly as a year)
        const sanitizedObj = {
          ...newObj,
          releaseDate: String(newObj.releaseDate), // Convert releaseDate to a string
        };
  
        const response = await fetch(`http://localhost:5000/api/${type}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sanitizedObj),
        });
  
        if (response.ok) {
          alert('Save success');
        } else {
          alert('Save failed');
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <div className="rgb-container">
        <button onClick={() => save(obj_state)}>Save</button>
      </div>
    );
  }