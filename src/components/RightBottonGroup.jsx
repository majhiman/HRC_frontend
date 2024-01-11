import React, {useState} from 'react';
import { Button, ButtonGroup, Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { addAPI, deleteAPI, editAPI } from '../Services/services';

const useStyles = makeStyles(theme => ({
    groupstyle:{
        width:"30vw",
        height:"3.6vw",
        paddingLeft:"6.8vw",
    }, 
    buttonStyle:{
        color:"white !important",
        fontSize:"1vw !important"
    },
    iconStyle:{
        color:"white !important",
        fontSize:"1vw !important",
        paddingRight:"5%"
    },
    deleteTextField:{
      marginRight:"4% !important"
    },
    AddTextField:{
      marginRight:"2% !important",
      marginTop:"4% !important"
    }
}));

//============== Add Dialog ====================================

const AddDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      fontWeight:"normal",
      fontSize:"1.4vw",
      borderTop:"solid 1px white",
      borderBottom:"none"
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "100%",
        maxWidth: "75vw",
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
      width:"30vw",
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
    }
}));

const AddDialogTitle = (props) => {
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

  AddDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

//=============== Edit Dialog =======================
const EditDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    fontWeight:"normal",
    fontSize:"1.4vw",
    borderTop:"solid 1px white",
    borderBottom:"none"
  },
  
  '& .MuiTypography-root':{
      backgroundColor:"#2d4250",
      border: "solid #2d4250",
      height:"17vw",
      width:"42vw",
      color:"white"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogTitle-root':{
      fontSize:"1.7vw",
      fontWeight:"bold"
  },
  '& .MuiButton-root':{
      border:"solid 1px white",
      color:"white",
      height:"3vw",
      width:"17vw",
      marginTop:"2%",
      fontSize:"1vw",
      marginRight:"4%"
  },
  '& .MuiDialogContent-dividers':{
      color:"white"
  },
  '& .MuiInputBase-input':{
    color:"white",
    width:"11vw",
    height:"0.8vw",
    fontSize:"1vw"
  },
  '& .MuiFormLabel-root':{
    fontSize:"1.2vw",
    color:"white"
  }
}));

const EditDialogTitle = (props) => {
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

  AddDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
//=============== Delete Dialog =======================
const DeleteDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      fontWeight:"normal",
      fontSize:"1.4vw",
      borderTop:"solid 1px white",
      borderBottom:"none"
    },
    '& .MuiTypography-root':{
        backgroundColor:"#2d4250",
        border: "solid #2d4250",
        height:"17vw",
        width:"40vw",
        color:"white"
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    '& .MuiDialogTitle-root':{
        fontSize:"1.7vw",
        fontWeight:"bold"
    },
    '& .MuiButton-root':{
        border:"solid 1px white",
        color:"white",
        height:"3vw",
        width:"15vw",
        marginTop:"2%",
        fontSize:"1vw",
        marginRight:"3%"
    },
    '& ..MuiDialogContent-dividers':{
        color:"white"
    }
  }));

const DeleteDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    
    //==================================================
    
  
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

  AddDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
//===================================================
const RightBottonGroup = ({
  handleAddSnackbar,
  sl_no,handleWarningSnackbar,
  handleDeleteSnackbar,
  setAddCheck,
  addCheck,
  deleteCheck,
  setDeleteCheck,
  handleEditSnackbar,
  setEditCheck,
  editCheck
  }) => {
    const classes = useStyles();
    
    //================ ADD Handler===================
    const [addvalue, setAddvalue] = useState({
      business_code:"",
      cust_number:"",
      clear_date:"",
      business_year:"",
      doc_id:"",
      posting_date:"",
      document_create_date:"",
      due_in_date:"",
      invoice_currency:"",
      document_type:"",
      posting_id:"",
      total_open_amount:"",
      baseline_create_date:"",
      cust_payment_terms:"",
      invoice_id:""
    })

    //const{businessCode,customerNumber} = addvalue;

    const changeAddHandler = e =>{
      e.preventDefault();
      setAddvalue({
        ...addvalue,
        [e.target.name]:e.target.value
      })
    }

    const addSubmitHandler = async (e) =>{
      //console.log(addvalue)
      e.preventDefault();
      
      let response = await addAPI(addvalue);
      if (response){
        setAddvalue({
          business_code:"",
          cust_number:"",
          clear_date:"",
          business_year:"",
          doc_id:"",
          posting_date:"",
          document_create_date:"",
          due_in_date:"",
          invoice_currency:"",
          document_type:"",
          posting_id:"",
          total_open_amount:"",
          baseline_create_date:"",
          cust_payment_terms:"",
          invoice_id:""
        });
        setAddCheck(addCheck+1);
        handleAddSnackbar();
        AddClose();
      }
    }
    
    //========Add Click==================
    const [Addopen, setAddOpen] = React.useState(false);
    const AddClickOpen = () => {
        setAddOpen(true);
    };
      const AddClose = () => {
        setAddvalue({
          business_code:"",
          cust_number:"",
          clear_date:"",
          business_year:"",
          doc_id:"",
          posting_date:"",
          document_create_date:"",
          due_in_date:"",
          invoice_currency:"",
          document_type:"",
          posting_id:"",
          total_open_amount:"",
          baseline_create_date:"",
          cust_payment_terms:"",
          invoice_id:""
        });
        setAddOpen(false);
    };

    
    //================ Edit Handler ===================
    const [editvalue, setEditValue] = useState({
      invoiceCurrency:"",
      customerPaymentTerms:"",
    })

    const changeEditHandler = e =>{
      e.preventDefault();
      setEditValue({
        ...editvalue,
        [e.target.name]:e.target.value
      })
    }

    const editSubmitHandler = async e =>{
      //console.log(editvalue)
      e.preventDefault();
      let check =0;
      for (let i = 0; i< sl_no.length; i++){
        //console.log(sl_no[i]);
        let response = await editAPI(editvalue.invoiceCurrency,editvalue.customerPaymentTerms,sl_no[i]);        
        if(response){
          check=1;
        }        
      }
      if(check===1){
        setEditValue({
          invoiceCurrency:"",
          customerPaymentTerms:"",
        });
        setEditCheck(editCheck+1);
        handleEditSnackbar();
        EditClose()
      }
    }
    //========Edit Click==================
    const [Editopen, setEditOpen] = useState(false);
    const EditClickOpen = async (e) => {
      if(sl_no.length > 0 && sl_no.length<=1){
        setEditOpen(true);
      }
      else{
        handleWarningSnackbar();
      }
    };
      const EditClose = () => {
        setEditOpen(false);
    };
    //=============== Delete Backend =================
    
    const deleteSubmitHandler = async (e) =>{
      e.preventDefault();
      let check=0;
      for (let i = 0; i< sl_no.length; i++){
        //console.log(sl_no[i]);
        let response = await deleteAPI(sl_no[i]);        
        if(response){
          check=1;
        }
      }
      if(check===1){
        setDeleteCheck(deleteCheck+1);
        handleDeleteSnackbar();
        DeleteClose();
      }
    }

    //========Delete Click==================
    const [Deleteopen, setDeleteOpen] = React.useState(false);
    const DeleteClickOpen = () => {
      if(sl_no.length > 0){
        setDeleteOpen(true);
      }
      else{
        handleWarningSnackbar();
      } 
    };
      const DeleteClose = () => {
        setDeleteOpen(false);
    };
    //=============================================
    const buttons = [
        <Button key="one" className={classes.buttonStyle} onClick={AddClickOpen}><AddIcon className={classes.iconStyle} />ADD</Button>,
        <Button key="two" className={classes.buttonStyle} onClick={EditClickOpen}><EditIcon className={classes.iconStyle} />EDIT</Button>,
        <Button key="three" className={classes.buttonStyle} onClick={DeleteClickOpen}><DeleteIcon className={classes.iconStyle} />DELETE</Button>,
    ];

    //========== Year Value ==========
    
  return (
    <div>
      
        <ButtonGroup size="small" aria-label="small button group" className={classes.groupstyle}>
            {buttons}
        </ButtonGroup>

        <AddDialog
            onClose={AddClose}
            aria-labelledby="customized-dialog-title"
            open={Addopen}
        >
            <AddDialogTitle id="customized-dialog-title" onClose={AddClose}>
            ADD Data
            </AddDialogTitle>       

            <form className={classes.form}>
              
                <DialogContent dividers>
                  <Grid item>
                    <TextField
                      label="Business Code"
                      name="business_code"
                      id="outlined-size-small"
                      placeholder='U001'
                      focused  
                      className={classes.AddTextField} 
                      value={addvalue.business_code}      
                      onChange={changeAddHandler}                                 
                    />
                    <TextField
                      label="Customer Number"
                      name="cust_number"
                      id="outlined-size-small"
                      placeholder='200769623' 
                      focused                 
                      className={classes.AddTextField}
                      value={addvalue.cust_number}      
                      onChange={changeAddHandler}
                    />                     
                    <TextField
                      label="Clear Date"
                      id="outlined-size-small"
                      type="date"
                      name="clear_date"
                      focused 
                      className={classes.AddTextField}
                      value={addvalue.clear_date}      
                      onChange={changeAddHandler}                 
                    />
                    
                    <TextField
                      label="Business Year"
                      id="outlined-size-small"
                      placeholder="2020"  
                      name="business_year"
                      type="date"
                      focused    
                      className={classes.AddTextField} 
                      value={addvalue.business_year}      
                      onChange={changeAddHandler}            
                    />
                  </Grid> 
                  <Grid item >
                    <TextField
                      label="Document Id"
                      id="outlined-size-small"
                      placeholder="1930438491"
                      focused  
                      name="doc_id"
                      className={classes.AddTextField}  
                      value={addvalue.doc_id}      
                      onChange={changeAddHandler}                                      
                    />
                    <TextField
                      label="Posting Date"
                      id="outlined-size-small"
                      type="date" 
                      focused 
                      name="posting_date"                
                      className={classes.AddTextField}
                      value={addvalue.posting_date}      
                      onChange={changeAddHandler}
                    />                     
                    <TextField
                      label="Document Create Date"
                      id="outlined-size-small"
                      type="date"
                      focused  
                      name="document_create_date"
                      className={classes.AddTextField} 
                      value={addvalue.document_create_date}      
                      onChange={changeAddHandler}                
                    />
                    <TextField
                      label="Due Date"
                      id="outlined-size-small"
                      type="date"  
                      focused    
                      name="due_in_date"
                      className={classes.AddTextField}  
                      value={addvalue.due_in_date}      
                      onChange={changeAddHandler}           
                    />
                  </Grid>
                  <Grid item >
                    <TextField
                      label="Invoice Currency"
                      id="outlined-size-small"
                      placeholder="USD"
                      focused
                      className={classes.AddTextField}    
                      name="invoice_currency"
                      value={addvalue.invoice_currency}      
                      onChange={changeAddHandler}                                    
                    />
                    <TextField
                      label="Document type"
                      id="outlined-size-small"
                      placeholder="RV"  
                      focused                 
                      name="document_type"
                      className={classes.AddTextField}
                      value={addvalue.document_type}      
                      onChange={changeAddHandler}
                    />                     
                    <TextField
                      label="Posting Id"
                      id="outlined-size-small"
                      placeholder="1"
                      focused  
                      name="posting_id"
                      className={classes.AddTextField}  
                      value={addvalue.posting_id}      
                      onChange={changeAddHandler}               
                    />
                    <TextField
                      label="Total open amount"
                      id="outlined-size-small"  
                      focused    
                      name="total_open_amount"
                      placeholder="50000"
                      className={classes.AddTextField}   
                      value={addvalue.total_open_amount}      
                      onChange={changeAddHandler}          
                    />
                  </Grid>
                  <Grid item >
                    <TextField
                      label="Baseline Create Date"
                      id="outlined-size-small"
                      type="date"
                      focused  
                      name="baseline_create_date"
                      className={classes.AddTextField}  
                      value={addvalue.baseline_create_date}      
                      onChange={changeAddHandler}                                      
                    />
                    <TextField
                      label="Customer Payment Terms"
                      id="outlined-size-small"
                      placeholder="NAH4"  
                      focused               
                      name="cust_payment_terms"  
                      className={classes.AddTextField}
                      value={addvalue.cust_payment_terms}      
                      onChange={changeAddHandler}
                    />                     
                    <TextField
                      label="Invoice Id"
                      id="outlined-size-small"
                      placeholder="1930438491"
                      focused  
                      name="invoice_id"  
                      className={classes.AddTextField}
                      value={addvalue.invoice_id}      
                      onChange={changeAddHandler}                 
                    />                    
                  </Grid>          
                </DialogContent> 
                <Button autoFocus onClick={addSubmitHandler}>
                  ADD
                </Button>
                <Button className={classes.deleteFromButtonStyle} autoFocus onClick={AddClose}>
                  CANCEL
                </Button>
              
              </form>
              
        </AddDialog>
        

        <EditDialog
            onClose={EditClose}
            aria-labelledby="customized-dialog-title"
            open={Editopen}
        >
            <EditDialogTitle id="customized-dialog-title" onClose={EditClose}>
              Edit
              <form>
                <DialogContent dividers>
                  
                  <TextField
                    label="Invoice Currency"
                    id="outlined-size-small"
                    placeholder="USD"
                    focused  
                    className={classes.deleteTextField} 
                    name="invoiceCurrency"
                    value={editvalue.invoiceCurrency}      
                    onChange={changeEditHandler}                 
                  />
                  <TextField
                    label="Customer Payment Terms"
                    id="outlined-size-small"
                    placeholder="NAH4"  
                    focused     
                    name="customerPaymentTerms" 
                    value={editvalue.customerPaymentTerms}      
                    onChange={changeEditHandler}            
                  />                                
                </DialogContent> 
                <Button autoFocus onClick={editSubmitHandler}>
                  EDIT
                </Button>
                <Button className={classes.deleteFromButtonStyle} autoFocus onClick={EditClose}>
                  CANCEL
                </Button>
              </form>                         
            </EditDialogTitle>                          
        </EditDialog>

        
        <DeleteDialog
            onClose={DeleteClose}
            aria-labelledby="customized-dialog-title"
            open={Deleteopen}
        >
            <DeleteDialogTitle id="customized-dialog-title" onClose={DeleteClose}>
                Delete Records ?
                <DialogContent dividers>
                    Are you sure you want to delete these record/records ?                    
                </DialogContent>
                <Button className={classes.deleteFromButtonStyle} autoFocus onClick={DeleteClose}>
                    CANCEL
                </Button>
                <Button autoFocus onClick={deleteSubmitHandler}>
                    DELETE
                </Button>
            </DeleteDialogTitle>       
        </DeleteDialog>
      
    </div>
  )
}

export default RightBottonGroup