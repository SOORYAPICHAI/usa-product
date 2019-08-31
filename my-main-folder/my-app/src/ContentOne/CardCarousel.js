import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "400px",
    [theme.breakpoints.down('sm')]: {
          
      minHeight: "100%",
      },
    boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19) !important"
  },
  hideCarouseltxt:{
    [theme.breakpoints.down('sm')]: {
          
    display:'none'
      },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: "60%"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    "& button": {
      border: "1px solid #52ca9c",
      color: "#52ca9c",
      "&:hover": {
        backgroundColor: "#52ca9c",
        color: "white"
      }
    }
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card} >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" style={{color:'#52ca9c',textAlign:'left',padding:'0.5rem',fontWeight:'bold',fontFamily: 'cursive'}}>
            Dental Event
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{textAlign:'left'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
            <span className={classes.hideCarouseltxt}>
<br />
<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>       
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button variant="outlined">Appointment Now</Button>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="data:image/jpeg;base64,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"
        title="Live from space album cover"
      />
    </Card>
  );
}
