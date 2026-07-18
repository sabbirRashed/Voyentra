export const getDestinations = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`);
    const data = await res.json();
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

export const updateDestinaiton = async (id, modifiedData, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(modifiedData)
    });
    const data = await res.json();
    return data;
}

export const postDestination = async (destinationData, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(destinationData)
    });
    const data = await res.json();
    return data;
}

export const deleteDestination = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return data;
}

// booking API
export const getBookingInfoByUserId = async (userId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = res.json();
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