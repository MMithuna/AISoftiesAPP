import { Button, Card, FormControl, TextField, Typography } from "@mui/material"
import './Login.css'

const Login = () =>(
    <div>
        <Card className="m-8 flex flex-col justify-self-center self-center loginCard">
            <Typography className="m-2"> Enter UserName & Pasword to login </Typography>
            <FormControl margin="normal">
                <TextField
                    type="email"
                    placeholder="Email Id"
                />
            </FormControl>
            <FormControl margin="normal">
                <TextField
                    type="password"
                    placeholder="Password"
                />
                <Button  variant="contained" sx={{marginTop:"10%",padding:"15px"}} > Login </Button>
            </FormControl>
            <Typography> Create New? <a href="/register"> Click Here </a> </Typography>
        </Card>
    </div>
)


export default Login;