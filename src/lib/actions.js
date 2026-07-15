

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