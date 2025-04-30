
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";



export default function AddResevation(item: any): void {
    
    const demo = "http://localhost:8080/api";
    const [signUser, setSignUser] = useState({email:'', password:''});
    const [reservation, setReservation] = useState(item);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState();
    const [showDialog, setShowDialog] = useState(false);
    const [count, setCount] = useState(0);

    const handleChange = (event: any) => {
        setSignUser({ ...signUser, [event.target.name]: event.target.value })
    }

    const handlecount= ()=> {
        setCount(count)
        if(count < 0){
            window.prompt("ammount must be higer than 0")
        }
    }

    const handleClose = () => {
        setOpen(false),
        emptyText();
    }

    const emptyText = () => {
        setSignUser({ email: '', password: '' })
    }

    const fetchUser = async (email: string, password: string) => {
        fetch(demo+'/user/findemail/'+email+"/"+password)
            .then(response => 
                response.json())
            .then(data => { 
                setUser(data)
                console.log(data)         
            },)
         
            setOpen(false),
            setShowDialog(true),        
            emptyText() 
    }
    
<>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            id="email"
                            name="email"
                            label="email"
                            type="text"
                            fullWidth
                            onChange={handleChange}
                            value={signUser.email}
                        />
                        <TextField
                            autoFocus
                            required
                            id="password"
                            name="password"
                            label="password"
                            type="text"
                            fullWidth
                            onChange={handleChange}
                            value={signUser.password}
                        />
                    </DialogContent>
                    <DialogActions>
                        <button onClick={() => handleClose()}>Cancel</button>
                        <button onClick={() => fetchUser(signUser.email, signUser.password)}>Continue</button>
                    </DialogActions>
                    </Dialog>

                                <Dialog
                                open={showDialog}
                                onClose={handleClose}
                            >
                                <DialogTitle>Sign In</DialogTitle>
                                <DialogContent>
                                    <TextField
                                        autoFocus
                                        required
                                        id="productName"
                                        name="productName"
                                        label="productName"
                                        type="text"
                                        fullWidth
                                        unselectable="on"
                                        value={item.productName}
                                    />
                                    <TextField
                                        autoFocus
                                        required
                                        id="price"
                                        name="price"
                                        label="price"
                                        type="text"
                                        fullWidth
                                        unselectable="on"
                                        value={item.price}
                                    />
                                     <TextField
                                        autoFocus
                                        required
                                        id="size"
                                        name="size"
                                        label="size"
                                        type="text"
                                        fullWidth
                                        unselectable="on"
                                        value={item.size}
                                    />
                                     <TextField
                                        autoFocus
                                        required
                                        id="count"
                                        name="count"
                                        label="Amount"
                                        type="text"
                                        fullWidth
                                        onChange={handlecount}
                                        value={count}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => handleClose()}>Cancel</button>
                                    <button onClick={() => fetchUser(signUser.email, signUser.password)}>Continue</button>
                                </DialogActions>
                            </Dialog>
                            </>
    
}