import React,{useState} from 'react';
import { Button, ButtonGroup, Dialog, DialogTitle, IconButton, TextField, DialogContent, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import RefreshIcon from '@mui/icons-material/Refresh';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { advanceSearchAPI, analyticsAPI, analyticspieAPI, predictAPI } from '../Services/services';
import Chat from './Chat';

const useStyles = makeStyles(theme => ({
    groupstyle:{
        width:"30vw",
        height:"3.6vw"
    },
    predict:{
        backgroundColor:"#14aff0 !important",
        color:"white !important",
        fontSize:"1vw !important"
    },  
    rest:{
        color:"white !important",
        fontSize:"1vw !important",
    },
    refreshStyle:{
        fontSize:"2vw !important"
    },
    inputPadding:{
        marginRight:"2% !important",
        marginTop:"4% !important",
        marginLeft:"6% !important"
    }
}));

//============== Advance Search Dialog ====================================

const AdvanceSearchDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      fontWeight:"normal",
      fontSize:"1vw",
      borderTop:"solid 1px white",
      borderBottom:"none"
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "100%",
        maxWidth: "44vw",
        height:"25vw",
        backgroundColor:"#2d4250",
        border: "solid #2d4250"
      },
    },
    '& .MuiTypography-root':{
      backgroundColor:"#2d4250",
      border: "solid #2d4250",
      color:"white"
    },
    '& .MuiDialogTitle-root':{
      fontSize:"1.7vw",
      fontWeight:"bold"
    },
    '& .MuiDialogContent-dividers':{
      color:"white"
    },
    '& .MuiButton-root':{
      color:"white",
      border:"solid 1px white",
      width:"15vw",
      marginLeft:"2%"
    },
    '& .MuiInputBase-input':{
      color:"white",
      width:"12vw",
      height:"1vw",
      fontSize:"1vw"
    },
    '& .MuiFormLabel-root':{
      fontSize:"1.2vw",
      color:"white"
    },
    "& .MuiInput-icon": {
      color: "#ffffff"
    },
    "& .MuiSelect-icon": {
      color: "#ffffff"
    },
}));

const AdvanceSearchDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  AdvanceSearchDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};



//============== Analytic View Dialog ====================================

const AnalyticViewDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    fontWeight:"normal",
    fontSize:"1vw",
    borderTop:"solid 1px white",
    borderBottom:"none"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: "100%",
      maxWidth: "50vw",
      height:"40vw",
      backgroundColor:"#2d4250",
      border: "solid #2d4250"
    },
  },
  '& .MuiTypography-root':{
    backgroundColor:"#2d4250",
    border: "solid #2d4250",
    color:"white"
  },
  '& .MuiDialogTitle-root':{
    fontSize:"1.7vw",
    fontWeight:"bold"
  },
  '& .MuiDialogContent-dividers':{
    color:"white"
  },
  '& .MuiButton-root':{
    color:"white",
    border:"solid 1px white",
    width:"15vw",
    marginLeft:"8.5%",
    marginRight:"8.5%"
  },
  '& .MuiInputBase-input':{
    color:"white",
    width:"12vw",
    height:"1vw",
    fontSize:"1vw"
  },
  '& .MuiFormLabel-root':{
    fontSize:"1.2vw",
    color:"white"
  },
  "& .MuiInput-icon": {
    color: "#ffffff"
  },
  "& .MuiSelect-icon": {
    color: "#ffffff"
  },
}));

const AnalyticViewDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

AnalyticViewDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const LeftBottonGroup = ({refresh,setAdvanceSearchData,setSearchValue,sl_no,handleWarningSnackbar,predictdata}) => {
    const classes = useStyles();


  //======== Advance Search Clicked==================
  const [advanceSearchValue, setadvanceSearchValue] = useState({
    doc_id:"",
    invoice_id:"",
    cust_number:"",
    business_year:""
  })
    
    const [AdvanceSearchopen, setAdvanceSearchopen] = useState(false);
    const AdvanceSearchClickopen = () => {
        setAdvanceSearchopen(true);
    };

    const AdvanceSearchClose = () => {
        setAdvanceSearchopen(false);
        setadvanceSearchValue({
          doc_id:"",
          invoice_id:"",
          cust_number:"",
          business_year:""
        });
    };

    //================ Advance Search Handler ========================== 
    const changeAdvanceSearchHandler = e =>{
        e.preventDefault();
        setadvanceSearchValue({
            ...advanceSearchValue,
            [e.target.name]:e.target.value
        })
    }

    const advanceSearchSubmitHandler = async (e) =>{
      e.preventDefault();
      //const d = await advanceSearchAPI(advanceSearchValue);
      //console.log(d);
      setAdvanceSearchData(await advanceSearchAPI(advanceSearchValue));

      setadvanceSearchValue({
        doc_id:"",
        invoice_id:"",
        cust_number:"",
        business_year:""
      });
      AdvanceSearchClose();
    }

    //=============== Chats(Analytics) =====================
    const [chatopen, setChatOpen] = useState(false);

    const handleClickChatOpen = () => {
      setChatOpen(true);
    };

    const [barChat,setBarChat] = useState([]);
    const [pieChat,setPieChat] = useState([]);

    //================= Analytics ==========================
    const [analyticsValue,setAnalyticsValue]=useState({
      clearDateStart:"",
      clearDateEnd:"",
      dueDateStart:"",
      dueDateEnd:"",
      baseLineDateStart:"",
      baseLineDateEnd:"",
      invoiceCurrency:""
    })

    const changeAnalyticsHandler = e =>{
      e.preventDefault();
      setAnalyticsValue({
          ...analyticsValue,
          [e.target.name]:e.target.value
      })
    }

    const analyticsSubmitHandler = async (e) =>{
      e.preventDefault();
      //console.log(analyticsValue);
      setBarChat(await analyticsAPI(analyticsValue));   
      setPieChat(await analyticspieAPI(analyticsValue));   
      handleClickChatOpen();
    }

    //======== Analytic View Clicked=================    
    const [AnalyticViewopen, setAnalyticViewopen] = useState(false);
    const AnalyticViewClickopen = () => {
      setAnalyticViewopen(true);
    };

    const AnalyticViewClose = () => {
      setAnalyticViewopen(false);
      setAnalyticsValue({
        clearDateStart:"",
        clearDateEnd:"",
        dueDateStart:"",
        dueDateEnd:"",
        baseLineDateStart:"",
        baseLineDateEnd:"",
        invoiceCurrency:""
      })
  };


    //============ Refresh =====================
    const handleRefreshOnClick = (e) =>{
      e.preventDefault();
      setSearchValue({
        cust_number:""
      });
      refresh();
    }

    //============== Predict =====================
    const predictSubmitHandler =async (e) =>{
      e.preventDefault();
      if(sl_no.length > 0 && sl_no.length<=1){
        console.log(predictdata)
        let bucket = await predictAPI(predictdata);
        console.log(bucket)
      }
      else{
        handleWarningSnackbar();
      }
    }

    
    const buttons = [
        <Button key="one" className={classes.predict} onClick={predictSubmitHandler}>Predict</Button>,
        <Button key="two" className={classes.rest} onClick={AnalyticViewClickopen}>Analytics View</Button>,
        <Button key="three" className={classes.rest} onClick={AdvanceSearchClickopen} >Advance Search</Button>,
        <Button key="four" className={classes.rest} onClick={handleRefreshOnClick}><RefreshIcon className={classes.refreshStyle}/></Button>,
    ];
  return (
    <div>
        <ButtonGroup size="small" aria-label="small button group" className={classes.groupstyle}>
            {buttons}
        </ButtonGroup>


        <AdvanceSearchDialog
            onClose={AdvanceSearchClose}
            aria-labelledby="customized-dialog-title"
            open={AdvanceSearchopen}
        >
            <AdvanceSearchDialogTitle id="customized-dialog-title" onClose={AdvanceSearchClose}>
            Advance Search
            </AdvanceSearchDialogTitle>       

            <form className={classes.form}>
                <DialogContent dividers>
                  <Grid item>
                    <TextField
                        label="Document Id"
                        id="outlined-size-small"
                        placeholder="1930438491"
                        focused  
                        name="doc_id"
                        className={classes.inputPadding}  
                        value={advanceSearchValue.doc_id}      
                        onChange={changeAdvanceSearchHandler}     
                                                         
                    />

                    <TextField
                        label="Invoice Id"
                        id="outlined-size-small"
                        placeholder="1930438491"
                        focused  
                        name="invoice_id"  
                        className={classes.inputPadding}
                        value={advanceSearchValue.invoice_id}      
                        onChange={changeAdvanceSearchHandler}
                                         
                    /> 
                  </Grid> 
                  <Grid item >
                    <TextField
                        label="Customer Number"
                        name="cust_number"
                        id="outlined-size-small"
                        placeholder='200769623' 
                        focused                 
                        className={classes.inputPadding}
                        value={advanceSearchValue.cust_number}      
                        onChange={changeAdvanceSearchHandler}
                        
                    />   
                                      
                    <TextField
                        label="Business Year"
                        id="outlined-size-small"
                        placeholder="2020"  
                        name="business_year"
                        focused    
                        className={classes.inputPadding} 
                        value={advanceSearchValue.business_year}      
                        onChange={changeAdvanceSearchHandler}     
                               
                    />
                  </Grid>
                </DialogContent> 
                <Button autoFocus onClick={advanceSearchSubmitHandler}>
                  SEARCH
                </Button>
                <Button autoFocus onClick={AdvanceSearchClose}>
                  CANCEL
                </Button>
              </form>
              
        </AdvanceSearchDialog>



        {/*======================================*/}
        <AnalyticViewDialog
        onClose={AnalyticViewClose}
        aria-labelledby="customized-dialog-title"
        open={AnalyticViewopen}
    >
        <AnalyticViewDialogTitle id="customized-dialog-title" onClose={AnalyticViewClose}>
        Analytics View
        </AnalyticViewDialogTitle>       

        <form className={classes.form}>
            <DialogContent dividers>
              <Grid item>
                
                <TextField
                    label="Clear Date Start"
                    id="outlined-size-small"
                    focused  
                    type="date"
                    className={classes.inputPadding}
                    name="clearDateStart"                      
                    value={analyticsValue.clearDateStart}      
                    onChange={changeAnalyticsHandler}     
                                                 
                />

                <TextField
                    label="Due Date Start"
                    id="outlined-size-small"
                    focused  
                    type="date"
                    className={classes.inputPadding}
                    name="dueDateStart"                      
                    value={analyticsValue.dueDateStart}      
                    onChange={changeAnalyticsHandler} 
                                     
                /> 
              </Grid> 
              <Grid item >
                <TextField
                    label="Clear Date End"
                    type="date"
                    id="outlined-size-small"
                    focused                 
                    className={classes.inputPadding}
                    name="clearDateEnd"                      
                    value={analyticsValue.clearDateEnd}      
                    onChange={changeAnalyticsHandler} 
                    
                />   
                                  
                <TextField
                    label="Due Date End"
                    id="outlined-size-small"
                    type="date"
                    focused    
                    className={classes.inputPadding}
                    name="dueDateEnd"                      
                    value={analyticsValue.dueDateEnd}      
                    onChange={changeAnalyticsHandler}     
                    
                />
              </Grid>
              <Grid item >
                <TextField
                    label="Baseline Create Date Start"
                    type="date"
                    id="outlined-size-small"
                    focused                 
                    className={classes.inputPadding}
                    name="baseLineDateStart"                      
                    value={analyticsValue.baseLineDateStart}      
                    onChange={changeAnalyticsHandler}
                    
                />   
                                  
                <TextField
                    label="Invoice Currency"
                    id="outlined-size-small"
                    focused    
                    className={classes.inputPadding}
                    name="invoiceCurrency"                      
                    value={analyticsValue.invoiceCurrency}      
                    onChange={changeAnalyticsHandler}     
                           
                />
              </Grid>
              <Grid item >
                <TextField
                    label="Baseline Create Date End"
                    type="date"
                    id="outlined-size-small"
                    focused                 
                    className={classes.inputPadding}
                    name="baseLineDateEnd"                      
                    value={analyticsValue.baseLineDateEnd}      
                    onChange={changeAnalyticsHandler}
                    
                />     
              </Grid>
              
            </DialogContent> 
            <Button autoFocus onClick={analyticsSubmitHandler}>
              SUBMIT
            </Button>
            <Button autoFocus onClick={AnalyticViewClose}>
              CANCEL
            </Button>
          </form>
          
    </AnalyticViewDialog>
    <Chat setChatOpen={setChatOpen} chatopen={chatopen} barChat={barChat} pieChat={pieChat}/>



    </div>
  )
}

export default LeftBottonGroup