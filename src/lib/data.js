export const getDestinations = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`);
    const data = await res.json();
    return data;
}

export const getFeaturedDestination = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const data = await res.json();
    console.log(data, 'featued');
    return data;
}

export const getDestinationById = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    console.log(data);
    return data;
}



// booking API
export const getBookingInfoByUserId = async (userId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}

export const bookingDestination = async (bookingData, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bookingData)
    });
    const data = await res.json();
    return data;
}

export const deleteBookingById = async (bookingId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return data;
}