const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/products")
    const data = await response.json();
    return data;

}
export { fetchProducts };


const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    return data;

};

export { fetchUsers };