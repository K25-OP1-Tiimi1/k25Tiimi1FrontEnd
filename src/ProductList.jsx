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
            queryKey: [''],
            queryFn: fetchProducts
        })
        //ag-Grid varten sarakkeet
        const [columnDefs, setColumnDefs] = useState([
            {field: 'productName'},
            {field: 'productType', filter:false},
            {field: 'color', filter: false},
            {field: 'size', filter:false, },
            {field: 'price'}
        ]);
        //Haetaan data toistaiseksi dymmyData.json tiedostosta
        // fetchProducts löytyy api tiodostosta
        useEffect( () => fetchProducts, [])
    return(
        <div className="ProductTable" style={{height:1000, opacity:0.9}}>

            <AgGridReact
            rowData={Products}
            columnDefs={columnDefs}
            domLayout="autoHeight"
            rowHeight={50}
            defaultColDef={{
                flex: 1,
                resizable: true,
                sortable: true,
                filter: true,
                
            }}
          
            />
        </div>
)}
