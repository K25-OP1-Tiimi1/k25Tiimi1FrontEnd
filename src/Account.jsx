import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react"

export default function Account() {

    const [signUser, setSignUser] = useState({ email: '', password: '' });
    const [user, setUser] = useState([])
    const [registerUser, setRegisterUser] = useState({ email: '', firstname: '', lastname: '', password: '' })

    const [open, setOpen] = useState(false)
    const [openRegistForm, setOpenRegistForm] = useState(false)
    const [showRegisterButton, setShowRegisterButton] = useState(true)
    const [showUser, setShowUser] = useState(false)

    const demo = "http://localhost:8080/api";
    const URL = "https://k25-tiimi1-backend-k25ohjproj.2.rahtiapp.fi/api";
    const handleClose = () => {
        setOpen(false),
            setOpenRegistForm(false)
    }

    const handleChange = event => {
        setSignUser({ ...signUser, [event.target.name]: event.target.value })
    }

    const handleRegisterChange = event => {
        setRegisterUser({ ...registerUser, [event.target.name]: event.target.value })
    }

    const handleSave = async () => {
        const options = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(registerUser)
        }
        setOpenRegistForm(false)
        const response = await fetch(demo+"/registerUser", options);
        const data = await response.json();
        console.log("registered", data)

        return data;
    }

    const fetchUserByName = async (email,password) => {
        fetch(demo+'/user/findemail/'+email+"/"+password)
            .then(response => response.json())
            .then(data => {
                setUser(data)
                console.log(data)
            })
        setOpen(false);
        if (user != "" && user != null) {
            setShowRegisterButton(false);
            setShowUser(true)
        }
        setShowUser(true)
    }

    const deldeteCurrentUser = async () => {
        const options = {
            method: 'DELETE'
        }
        if (window.confirm("do you want to delete this car")) {

            return fetch(demo+"/user/" + user?.id, options);
        }
    };

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
                {user?.firstname}
                <p>{user?.lastname}</p>
                <p>
                    {user?.email}
                </p>
                <button 
                id="deleteButton"
                style={{ fontSize: 20,
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
                    <button onClick={() => fetchUserByName(signUser.email)}>Sign in</button>
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