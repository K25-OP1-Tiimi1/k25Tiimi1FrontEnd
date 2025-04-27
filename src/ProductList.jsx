import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProducts } from "./api";
import { AllCommunityModule, ColumnAutoSizeModule, ModuleRegistry } from "ag-grid-community";



   export default function productList(){

    ModuleRegistry.registerModules([AllCommunityModule]);

        //query jonka avulla viedään tiedot ag-Grid-taulukkoon
        const queryClient = useQueryClient();

        const {data: Products} = useQuery({
            queryKey: ['products'],
            queryFn: fetchProducts
        })
        //ag-Grid varten sarakkeet
        const [columnDefs, setColumnDefs] = useState([           
            {field: 'manufacturer.name', 
                headerName:"Valmistaja",
            },
            {field: 'productName', 
                headerName:"Tuote"},
            {field: 'productType', 
                headerName:"kategoria"},
            {field: 'color', 
                filter: false, 
                headerName:"Väri",   
            },
            {field: 'size', 
                filter:false, 
                headerName:"Koko",
            },
            {field: 'price', 
                headerName:"Hinta"
            },
            {field: 'quantity',
                headerName:"varastossa"
             }
            
        ]);
        //Haetaan Backendistä
        // fetchProducts löytyy api tiodostosta
        useEffect( () => fetchProducts, [])
    return(
        <div className="ProductTable" style={{width: "100%", height: "100%", opacity:0.95, }}>

            <AgGridReact
            
            rowData={Products}
            columnDefs={columnDefs}
            domLayout="autoHeight"
            rowHeight={70}
            rowStyle={{fontSize:20}}
            headerHeight={70}
            defaultColDef={{
                initialWidth: 200,
                flex: 1,
                floatingFilter: true,
                sortable: true,
                filter: true,
                headerStyle: 
                    {
                    fontSize: 20, 
                    backgroundColor: 'white', 
                    fontWeight:"bold"}
            }}
          
            />
        </div>
)}
