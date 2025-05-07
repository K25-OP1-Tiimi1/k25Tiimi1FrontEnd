
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react"
import { deleteUserById, fetchUserByName, saveUser } from "./api";


export default function Account() {
    
    interface IUser{
        user:{
            id:any,
            email:string,
            password:string,
            firstname:string,
            lastname:string

        }
    }

    const [signUser, setSignUser] = useState({ email: '', password: '' });
    const [user, setUser] = useState<IUser>({user:{id:0, firstname:"",lastname:"",password:"", email:""}})
    const [registerUser, setRegisterUser] = useState({ email: '', firstname: '', lastname: '', password: '' })

    const [open, setOpen] = useState(false)
    const [openRegistForm, setOpenRegistForm] = useState(false)
    const [showRegisterButton, setShowRegisterButton] = useState(true)
    const [showUser, setShowUser] = useState(false)

    const handleClose = () => {
        setOpen(false),
            setOpenRegistForm(false),
            emptyText();
    }

    const handleChange = (event:any) => {
        setSignUser({ ...signUser, [event.target.name]: event.target.value })
    }

    const handleRegisterChange = (event:any) => {
        setRegisterUser({ ...registerUser, [event.target.name]: event.target.value })
    }

    const handleSave = async () => {
        saveUser(registerUser),
        handleClose();
    }

    const deldeteCurrentUser = async () => {
        deleteUserById(user.user.id)
                emptyText(),
                setShowUser(false);
        
    };

    const emptyText = () => {
        setRegisterUser({ email: '', firstname: '', lastname: '', password: '' }),
        setSignUser({ email: '', password: '' })
    }
    const signIn = async () => {
        fetchUserByName(signUser.email, signUser.password)
        .then(data => {setUser({user:{id:data.id, firstname:data.firstname,lastname:data.lastname,password:data.password, email:data.email}})}),
        setShowUser(true),
        setShowRegisterButton(false),
        handleClose();  
    }

    return (
        <>
            <div
                style={{ float: "inline-end", marginLeft: 30 }}>

                {showRegisterButton && <button
                    style={{ color: "black", background: "lightblue", fontSize: 18, fontWeight: "bold", }}
                    onClick={() => setOpenRegistForm(true)}> Register </button>}

                <button
                    style={{ color: "black", background: "lightblue", fontSize: 18, fontWeight: "bold" }}
                    onClick={() => setOpen(true)}> Sign In </button>

            </div>

            {showUser && <h3 style={{ background: "white" }}>
                {"Name: " + user?.user.firstname} {" " + user?.user.lastname}
                <p>
                    {"Email: " + user?.user.email}
                </p>
                <button
                    id="deleteButton"
                    style={{
                        fontSize: 20,
                    }}
                    onClick={() => deldeteCurrentUser()} >
                    Delete
                </button>
            </h3>}

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
                    <button onClick={() => signIn()}>Sign in</button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openRegistForm}
                onClose={handleClose}
            >
                <DialogTitle>Register</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        id="email"
                        name="email"
                        label="email"
                        type="text"
                        fullWidth
                        onChange={handleRegisterChange}
                        value={registerUser.email}
                    />
                    <TextField
                        autoFocus
                        required
                        id="firstname"
                        name="firstname"
                        label="first Name"
                        type="text"
                        fullWidth
                        onChange={handleRegisterChange}
                        value={registerUser.firstname}
                    />
                    <TextField
                        autoFocus
                        required
                        id="lastname"
                        name="lastname"
                        label="Last Name"
                        type="text"
                        fullWidth
                        onChange={handleRegisterChange}
                        value={registerUser.lastname}
                    />
                    <TextField
                        autoFocus
                        required
                        id="password"
                        name="password"
                        label="password"
                        type="text"
                        fullWidth
                        onChange={handleRegisterChange}
                        value={registerUser.password}
                    />
                </DialogContent>
                <DialogActions>
                    <button onClick={() => { handleClose() }}>Cancel</button>
                    <button onClick={() => handleSave()}>Save</button>
                </DialogActions>
            </Dialog>
        </>
    )
}