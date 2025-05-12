const fetchProducts = async () => {
    const response = await fetch("https://k25-tiimi1-backend-k25ohjproj.2.rahtiapp.fi/api/products")
    const data = await response.json();
    return data;

}

const fetchUsers = async () => {
    const response = await fetch("https://k25-tiimi1-backend-k25ohjproj.2.rahtiapp.fi/api/users");
    const data = await response.json();
    return data;

}

const fetchUserByName = async (email: string, password: string) => {
    const response = await fetch('https://k25-tiimi1-backend-k25ohjproj.2.rahtiapp.fi/api/user/findemail/' + email + "/" + password)
    const data = await response.json();
     console.log(data)
    return data;
}

const saveUser = async (registerUser:any) => {
    const options = {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(registerUser)
    }
    const response = await fetch("https://k25-tiimi1-backend-k25ohjproj.2.rahtiapp.fi/api/registerUser", options);
    const data = await response.json();
    console.log("registered", data);
    return data;
}
const deleteUserById = async (userId:number) => {
    const options = {
        method: 'DELETE'
    }
    if (window.confirm("do you want to delete User")) {
        fetch("https://k25-tiimi1-backend-k25ohjproj.2.rahtiapp.fi/api/user/" + userId, options)

    }
};
const sendReservationToBackend = async (dialog:any) => {
    const options = {
        method: 'POST',
        headers:{
            'content-Type': 'application/json',
        },
        body: JSON.stringify(dialog)
    }
    const response = await fetch ("https://k25-tiimi1-backend-k25ohjproj.2.rahtiapp.fi/api/reservation", options);
    const data = await response.json();
    console.log("reservation done", data);
    return data
}

export { fetchUsers, fetchProducts, fetchUserByName, saveUser, deleteUserById, sendReservationToBackend};