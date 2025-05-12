import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, sendReservationToBackend } from "./api";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

export default function productList() {

    interface Idialog {
        item: {
            productName: string,
            type: string,
            price: string,
            size: string,
            manufacturer: {
                name: string
            }
        },
        email: string,
        password: string,
        count: number
    }

    ModuleRegistry.registerModules([AllCommunityModule]);

    const [open, setOpen] = useState(false)
    const [dialog, SetDialog] = useState<Idialog>({
        item: {
            productName: "", type: "", price: "", size: "", manufacturer: {
                name: ""
            }
        }, email: "", password: "", count: 1
    })
    const { data: Products } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })

    const [columnDefs] = useState([
        {
            field: 'manufacturer.name',
            headerName: "Valmistaja",
        },
        {
            field: 'productName',
            headerName: "Tuote"
        },
        {
            field: 'productType',
            headerName: "kategoria"
        },
        {
            field: 'color',
            filter: false,
            headerName: "Väri",
        },
        {
            field: 'size',
            filter: false,
            headerName: "Koko",
        },
        {
            field: 'price',
            headerName: "Hinta"
        },
        {
            field: 'quantity',
            headerName: "varastossa"
        },
        {
            field: 'data', headerName: '', filter: false,

            cellRenderer: (params: any) => <Button onClick={() => addReservation(params.data)}> Varaa tuote </Button>
        }
    ]);

    const addReservation = (param: any) => {
        setOpen(true),
            SetDialog({ ...dialog, item: param })
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (event: any) => {
        SetDialog({ ...dialog, [event.target.name]: event.target.value })
    }

    const sendReservation = async () => {
        sendReservationToBackend(dialog)
        handleClose()
    }

    useEffect((): (() => void) => fetchProducts, [])
    return (
        <div className="ProductTable" style={{ width: "100%", height: "100%", opacity: 0.95, }}>

            <AgGridReact

                rowData={Products}
                columnDefs={columnDefs}
                domLayout="autoHeight"
                rowHeight={70}
                rowStyle={{ fontSize: 20 }}
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
                        fontWeight: "bold"
                    }
                }}
            />
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Hello this is just test
                </DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        disabled
                        label="Tuote"
                        type="text"
                        fullWidth
                        value={dialog.item?.productName}
                    />
                    <TextField
                        margin="dense"
                        disabled
                        label="Hinta"
                        type="text"
                        defaultValue={""}
                        fullWidth
                        value={dialog.item?.price}
                    />
                    <TextField
                        margin="dense"
                        disabled
                        label="koko"
                        type="text"
                        fullWidth
                        value={dialog.item?.size}
                    />
                    <TextField
                        margin="dense"
                        disabled
                        label="Valmistaja"
                        type="text"
                        fullWidth
                        value={dialog.item?.manufacturer?.name}
                    />
                    <TextField
                        margin="dense"

                        id="count"
                        name="count"
                        label="Määrä"
                        type="number"
                        fullWidth
                        onChange={handleChange}
                        value={dialog.count}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                        value={dialog.email}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        fullWidth
                        onChange={handleChange}
                        value={dialog.password}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => sendReservation()}> Send Reservation </Button>
                    <Button onClick={handleClose}> Cancel </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}
