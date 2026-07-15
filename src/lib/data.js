
export const getDestinations = async()=>{
    const res = await fetch('http://localhost:5000/destinations');
    const data = await res.json();
    return data;
}

export const getDestinationById = async(id)=>{
    const res = await fetch(`http://localhost:5000/destinations/${id}`);
    const data = await res.json();
    return data;
}

export const postDestination = async(destinationData)=>{
    const res = await fetch('http://localhost:5000/destination', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(destinationData)
    });


    const data = await res.json();
    return data;
}

