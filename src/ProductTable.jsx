import React from "react";

    function productTable(props){

    return(
    <>  
    <h3>
    <table>
    <thead>
        <tr> 
            <th>  tyyppi  </th>
            <th>  väri  </th>
            <th>  koko  </th>
            <th>hinta</th>
            <th>valmistaja</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map((item) => (
                <tr key={item.id}>
                    <td>{item.tyyppi} </td>
                    <td>{item.väri} </td>
                    <td>{item.koko} </td>
                    <td>{item.hinta} </td>
                    <td>{item.valmistaja} </td>
                </tr>
            ))}
        </tbody>
    </table>
    </h3>
    </>
)}
export default productTable;