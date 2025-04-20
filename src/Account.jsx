import {  Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import {  useState } from "react"

export default function Account() {

    const [signUser, setSignUser] = useState({username:'', email:''}); 
    const [user, setUser] = useState([])
    const [registerUser, setRegisterUser] = useState({username:'', email:''})

    const [open, setOpen] = useState(false)
    const [openRegistForm, setOpenRegistForm] = useState(false)
    const [showRegisterButton, setShowRegisterButton] = useState(true)

    const handleClose = () => {
        setOpen(false),
        setOpenRegistForm(false)
    }

    const handleChange = event => {
        setSignUser({...signUser,[event.target.name]: event.target.value})
    }

    const handleRegisterChange =  event => {
        setRegisterUser({...registerUser,[event.target.name]: event.target.value})
    }

    const handleSave =  async () => {
        const options = {
            method:'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(registerUser)
        }
        setOpenRegistForm(false)
        const response = await fetch("http://localhost:8080/registerUser", options);
        const data = await response.json();
        console.log("registered", data)
        
        return data;
    }
    const fetchUserByName = async (user) => {
            fetch('http://localhost:8080/user/'+ user)
            .then(response  => response.json())
            .then(data => {
                setUser(data)
                console.log(data)
            })
        setOpen(false);
        if (user != "" && user != null) {
           setShowRegisterButton(false)
        }

    }

    const deldeteCurrentUser = async () => {
            const options ={
              method: 'DELETE'
            }
              if(window.confirm("do you want to delete this car")){
                  return fetch("http://localhost:8080/user/"+user?.id, options);
              }
         };  
    
        return (
           <>  
            <div
            style={{float:"inline-end", marginLeft: 30}}>
           
            {showRegisterButton && <button 
            style={{color:"black",background:"lightblue",fontSize:18, fontWeight:"bold", }}
            onClick={() => setOpenRegistForm(true)}> Register </button>}
            
            <button 
            style={{color:"black",background:"lightblue",fontSize:18, fontWeight:"bold" }}
            onClick={() => setOpen(true)}> Sign In </button>
            
            </div>

            <h1 style={{background:"white"}}>
            {user?.username}
            <p>
            {user?.email}
            </p>
            <button style={{fontSize:20}}
            onClick={ () => deldeteCurrentUser()}>
                Delete 
            </button>
            </h1>
          
           <Dialog 
            open={open}
            onClose={handleClose}
            > 
                <DialogTitle>Sign In</DialogTitle>
                <DialogContent> 
                            <TextField 
                            autoFocus
                            required
                            id="username"
                            name="username"
                            label="username"
                            type="text"
                            fullWidth
                            onChange={handleChange}
                            value={signUser.username}
                            />
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
                            </DialogContent>
                <DialogActions>
              <button onClick={() => handleClose()}>Cancel</button>
              <button onClick={() => fetchUserByName(signUser.username)}>Sign in</button>
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
            id="username"
            name="username"
            label="username"
            type="text"
            fullWidth
            onChange={handleRegisterChange}
            value={registerUser.username}
            />
            {/* <TextField 
            autoFocus
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            fullWidth
            onChange={handleRegisterChange}
            value={registerUser.lastName}
            /> */}
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
            </DialogContent>
                <DialogActions>
              <button onClick={() => {handleClose()}}>Cancel</button>
              <button onClick={() => handleSave()}>Save</button>
            </DialogActions>
            </Dialog>
            </>
        )
}