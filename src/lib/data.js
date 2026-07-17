
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

export const updateDestinaiton = async(id, modifiedData)=>{
    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        method: 'PATCH',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(modifiedData)
    });
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

export const deleteDestination = async(id)=>{
    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        method: "DELETE",
        headers:{
            "content-type": "application/json"
        }
    })
    const data = await res.json();
    return data;
}

// booking API
export const getBookingInfoByUserId = async(userId) =>{
    const res = await fetch(`http://localhost:5000/booking/${userId}`);
    const data = res.json();
    return data;
}

export const bookingDestination = async(bookingData) =>{
    const res = await fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData)
    });
    const data = await res.json();
    return data;
}

export const deleteBookingById = async(bookingId)=>{
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
        method: 'DELETE',
        headers:{
            'content-type': 'application/json',
        }
    })
    const data = await res.json();
    return data;
}