import { Avatar, Tooltip} from "@mui/material";
import Logout from '@mui/icons-material/Logout'

const UserLoggedInfo = () => (
    <div className="flex items-center">
        <Avatar> M </Avatar>
        <Tooltip title="Logout" arrow>
            <Logout sx={{width:"1.5em", height:"1.8em",marginLeft:"5px",cursor:"pointer"}}/>
        </Tooltip>
    </div>
)

export default UserLoggedInfo;
