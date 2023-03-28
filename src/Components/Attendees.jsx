import { useEffect } from "react";

function Attendees() {

    useEffect(() => {
        // vad som skall hända vid mount
        fetch('https://majazocom.github.io/Data/attendees.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }, []);

    return ( 
        <section className="attendeesContainer">
            <h2>Här är de</h2>
        </section>
     );
}

export default Attendees;