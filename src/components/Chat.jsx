import React,{useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import { Bar,Pie } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale, 
    LineElement, 
    PointElement, 
    LinearScale, 
    Title,
    BarController,
    BarElement,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale, 
    PointElement, 
    LinearScale, 
    BarController,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    Title);

const useStyles = makeStyles(theme => ({
    AppBar:{
        backgroundImage:"radial-gradient(#2d4250 ,#2d4250)",
        width:"100%"
    },
    charSize:{
        width:"70%",
        marginLeft:"15% !important"
    },
    charPie:{
        width:"35%",
        marginLeft:"30% !important"
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Chat = ({setChatOpen,chatopen,barChat,pieChat}) => {
    const classes = useStyles();
    const handleClose = () => {
        setChatOpen(false);
    };

    //===================================================
    const [bcode,setBcode]=useState([]);
    const [cnumb,setCnumb]=useState([]);
    const [tamt,setTamt]=useState([]);
    const [icurr,setIcurr]=useState([]);
    const [count,setCount]=useState([]);
    useEffect(() => {
        setBcode(barChat.map(person => person.business_code));
        setCnumb(barChat.map(person2 => person2.cust_number));
        setTamt(barChat.map(person3 => person3.total_open_amount));
        setIcurr(pieChat.map(person4 => person4.invoice_currency));
        setCount(pieChat.map(person5 => person5.cust_number))
    },[chatopen]);

    //===================================================
    const barDdata = {
        labels: bcode,
        datasets: [
            {
                label:'No of Customers',
                data: cnumb,
                borderColor:'#ffb1c0',
                backgroundColor:'#ffb1c0',
                pointBackgroundColor:'#ffb1c0',
                pointBorderColor:'#ffb1c0'
            },
            {
                label:'Total Open Amount',
                data: tamt,
                borderColor:'#99d0f4',
                backgroundColor:'#99d0f4',
                pointBackgroundColor:'#99d0f4',
                pointBorderColor:'#99d0f4'
            },
          ],
    }
    
    const pieDdata = {
        labels: icurr,
        datasets: [
            {
                label:'No of Customers',
                data: count,
                borderColor:['#ffb1c0','#99d0f4'],
                backgroundColor:['#ffb1c0','#99d0f4'],
                pointBackgroundColor:['#ffb1c0','#99d0f4'],
                pointBorderColor:['#ffb1c0','#99d0f4']
            }
          ],
    }

    
  return (
    <div>
      <Dialog
        fullScreen
        open={chatopen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} className={classes.AppBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Analytics View
            </Typography>
          </Toolbar>
        </AppBar>
        <List className={classes.charSize}>
            <ListItemText primary="Chart.js" secondary="Bar Chart" />
            <Bar data={barDdata} />            
        </List>
        <List className={classes.charPie}>
            <ListItemText primary="Chart.js" secondary="Pie Chart" />
            <Pie data={pieDdata} />            
        </List>
      </Dialog>
    </div>
  )
}

export default Chat