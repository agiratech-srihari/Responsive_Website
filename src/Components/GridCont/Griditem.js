import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import lab_image from "../../assets/Images/lab_image.png";
import "./GridItem.css";
import IconButton from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';

export default function Griditem() {

 
  return (
    <Card sx={{ maxWidth: 350 ,height:'280px',display:'block',border:'1px solid #043752',boxShadow: '5px 10px 5px #d9d9d9'}} >
      <div style={{height:'50%',position:'relative'}}>
      <CardMedia component="img" image={lab_image} alt="green iguana" />
      </div>
      <CardContent style={{height:'50% !important'}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "left" ,color:"#043752",fontWeight:"700"}}
        >
          Lab A
        </Typography>
        <div style={{display:'flex',alignItems:"center"}}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            style={{border:'1px solid black',borderRadius:'50%',backgroundColor:'#ceecfd',color:'#3DB329'}}
          >
            <PlaceIcon />
          </IconButton>
          <div style={{display:'block',marginLeft:'1rem'}}>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'left',fontSize:'1rem',fontWeight:"700",color:"#043752"}}>
            velachery
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Distance - 4KM
          </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
