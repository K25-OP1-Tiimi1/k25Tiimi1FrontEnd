
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react"

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

    const demo = "http://localhost:8080/api";
    // const URL = "https://k25-tiimi1-backend-k25ohjproj.2.rahtiapp.fi/api";


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
        const options = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(registerUser)
        }
        setOpenRegistForm(false)
        const response = await fetch(demo + "/registerUser", options);
        const data = await response.json();
        console.log("registered", data),
            emptyText()
        return data;
    }

    const fetchUserByName = async (email: string, password: string) => {
        fetch(demo + '/user/findemail/' + email + "/" + password)
            .then(response =>
                response.json())
            .then(data => {
                setUser(data)
                console.log(data)
            },)

        setOpen(false),
            setShowRegisterButton(false),
            setShowUser(true),
            emptyText()
    }

    const deldeteCurrentUser = async () => {
        const options = {
            method: 'DELETE'
        }
        if (window.confirm("do you want to delete User")) {
            fetch(demo + "/user/" + user?.user.id, options),
                emptyText(),
                setShowUser(false);
        }
    };
    const emptyText = () => {
        setRegisterUser({ email: '', firstname: '', lastname: '', password: '' }),
            setSignUser({ email: '', password: '' })
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
                    <button onClick={() => fetchUserByName(signUser.email, signUser.password)}>Sign in</button>
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