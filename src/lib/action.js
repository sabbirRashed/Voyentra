'use server'

import { revalidatePath } from "next/cache";

// addmin controlar function
export const updateDestinaitonAction = async (id, modifiedData, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(modifiedData)
    });
    const data = await res.json();
    revalidatePath('/destinations')
    revalidatePath('/')
    return data;
}

export const postDestinationAction = async (destinationData, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(destinationData)
    });
    const data = await res.json();
    revalidatePath('/destinations');
    revalidatePath('/')
    return data;
}

export const deleteDestinationAction = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    revalidatePath('/destinations');
    revalidatePath('/')
    return data;
}


