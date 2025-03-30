import { useEffect, useState } from "react"
import ProductTable from "./ProductTable";


export default function ProductList(){

    const [data, setData] = useState([]);
   
    useEffect( () => {
        fetch('./dummyData.json')
        .then(response => {
            if (!response.ok)
                throw new Error("error in fetch: " + response.statusText);
            return response.json();
        })
    .then(responseData => {
        setData(responseData.Products)
    })
    .catch(err => console.error(err))
    }, [])


    return(
        <> 
         <h1>
        Products "dummyData"
        </h1>
        <ProductTable data={data} />
        </>
    )
}