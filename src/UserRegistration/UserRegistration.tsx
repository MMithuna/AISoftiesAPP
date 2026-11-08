import Box from '@mui/system/Box';
import { Button, FormControl, FormLabel, InputLabel, TextField, Typography } from '@mui/material';

interface NewUser {
    email : string,
    password : any,
    confirmPassword : any
}

const UserRegistration = () => {
    return(
        <Box>
            <div className="object-center flex flex-col w-xs justify-self-center border-1 p-5 m-5 rounded-sm">
                <Typography sx={{color:"gold"}}> Existing User? <a href='/login'> click Here </a></Typography>
                <Typography variant='h6' color='textPrimary'> Signup for new registration! </Typography>
                <FormControl margin='normal'>
                    <TextField 
                        label="Email Address" 
                        placeholder="Enter your Email Address" 
                        type="string" 
                        required={true}
                        // classes={{input : "m-px"}}
                        // onChange={}
                    >  
                    </TextField>
                </FormControl>
                <FormControl margin='normal'>
                    <TextField 
                        label="Password" 
                        placeholder="Enter Password" 
                        type="password" 
                        required={true}
                        // onChange={}
                    >  
                    </TextField>
                </FormControl>
                <FormControl margin='normal'>
                    <TextField 
                        label="Confirm Password" 
                        placeholder="Enter password to confirm" 
                        type="password" 
                        required={true}
                        // onChange={}
                    >  
                    </TextField>
                </FormControl>
                <Button variant='contained' sx={{marginTop:'5%',padding:'4% 0'}}> Create New Registration </Button>
            </div>
        </Box>
    )
}


export default UserRegistration;