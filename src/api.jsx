const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/api/products")
    const data = await response.json();
    return data;

}

const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/api/users");
    const data = await response.json();
    return data;

};

const registerUser = async (user) => {
    const options = {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }
    const response = await fetch("http://localhost:8080/api/registerUser", options);
    const data = await response.json();
    console.log("registered", data)
    return data;
}

const fetchUserByUsername = async (username, email) => {
    const response = await fetch('http://localhost:8080/api/user/' + username);
    const data = await response.json();
    console.log(data)
    return data;

};

const deleteUserById = async (id) => {
    const options = {
        method: 'DELETE'
    }
    if (window.confirm("do you want to delete this car")) {
        return fetch("http://localhost:8080/api/user/" + id, options);
    }
};

export { fetchUsers, fetchProducts, registerUser, fetchUserByUsername, deleteUserById };