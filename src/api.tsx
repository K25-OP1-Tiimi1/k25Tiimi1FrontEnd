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


export { fetchUsers, fetchProducts};