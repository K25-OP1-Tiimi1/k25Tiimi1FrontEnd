const fetchProducts = async () => {
    const response = await fetch('./dummyData.json');
    const data = await response.json();
    return data._embedded.products;
}

export{fetchProducts};