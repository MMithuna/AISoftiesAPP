import { Card, CardActions, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import aiImg from '../../images/image-proxy.png'
import aiVid from '../../images/video_Ai.png'
import aiCode from '../../images/code.jpg'
import { useState } from "react";

const Imgs = [aiImg, aiCode, aiVid];

const Product = ({listItem}:any) => {
    const [isFavourite, setIsFavourite] = useState(false);

    const handleFavourites = () =>{
        setIsFavourite(!isFavourite)
    }

    return (
        <Card sx={{maxwidth:300}} className="">
        <div className="h-85">
        <CardMedia
            component="img"
            image={Imgs[listItem.id-1]}
            sx={{height:"100%"}}
        />
        </div>
        <div>
            <h4> {listItem.name} </h4>
            <Typography> {listItem.description} </Typography>
            <Typography> Rs.{listItem.price} only </Typography>
            <CardActions className="flex justify-between">
                {!isFavourite && <Tooltip title="Add to Wishlist">
                    <IconButton onClick={handleFavourites}><FavoriteBorderIcon></FavoriteBorderIcon> </IconButton>
                </Tooltip> }
                { isFavourite &&
                <Tooltip title="Added to Wishlist">
                    <IconButton onClick={handleFavourites}><FavoriteIcon sx={{ color: 'red'}}></FavoriteIcon></IconButton>
                </Tooltip> }
                <Tooltip title="Add to Cart">
                <AddShoppingCartIcon></AddShoppingCartIcon>
                </Tooltip>
            </CardActions>
        </div>
    </Card>
    )
}

export default Product;