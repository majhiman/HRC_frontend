import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';
import {getData } from '../Services/services';
import Snackbar from './CustomSnackbar';

const Home = () => {

  //====== Snack Bar ===================
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState();
  const [snackbarMessage, setSnackbarMessage] = useState();

  const handlesnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  //============== Refresh =====================
  const [searchValue, setSearchValue] = useState({
    cust_number:""
  })
  const [refresh,setRefresh] = useState(0)
  const handleRefresh = () => {
    //console.log(refresh);
    setRefresh(refresh + 1); 
    setSnackbarOpen(true);
    setSnackbarSeverity("info");
    setSnackbarMessage("Data Refreshed !");
  }

  //============ Adding Data Snackbar ===========
  const [addCheck,setAddCheck] = useState(0);
  const handleAddSnackbar = () => {
    setSnackbarOpen(true);
    setSnackbarSeverity("success");
    setSnackbarMessage("Data Added Successfully !");
  }

  //=========== Edit Snackbar ===================
  const [editCheck,setEditCheck] = useState(0);
  const handleEditSnackbar = () => {
    setSnackbarOpen(true);
    setSnackbarSeverity("success");
    setSnackbarMessage("Data Edited Successfully !");
  }

  //=========== Deleting Snackbar ===================
  const [deleteCheck,setDeleteCheck] = useState(0);
  const handleDeleteSnackbar = () => {
    setSnackbarOpen(true);
    setSnackbarSeverity("success");
    setSnackbarMessage("Data Deleted Successfully !");
  }

  //============ Warning Snackbar ===============
  const handleWarningSnackbar = () => {
    setSnackbarOpen(true);
    setSnackbarSeverity("warning");
    setSnackbarMessage("Select 1 Row At a Time !");
  }

  //============= Predict ========================
  const [predictdata, setPredictdata] = useState([]);

  //============= Handling Serial Number =========
  const [sl_no, setSl_no] = useState([]);

  //============== Fetching Data ===============
  
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await getData());
  },[refresh,addCheck,deleteCheck,editCheck]);

  const [advanceSearchData, setAdvanceSearchData] = useState([]);

  useEffect(()=>{
    //setData(advanceSearchData);
    //if(advanceSearchData!== null)
    let size = advanceSearchData.length;
    if(size !== 0){
      //console.log(advanceSearchData);
      setData(advanceSearchData);
      setSnackbarOpen(true);
      setSnackbarSeverity("info");
      setSnackbarMessage("Data Updated !");
      
    }    
  },[advanceSearchData])


  return (
    <div>
      <Header 
        refresh={handleRefresh} 
        handleAddSnackbar={handleAddSnackbar} 
        sl_no={sl_no}
        handleWarningSnackbar={handleWarningSnackbar}
        handleDeleteSnackbar={handleDeleteSnackbar}
        setAddCheck={setAddCheck}
        addCheck={addCheck}
        deleteCheck={deleteCheck}
        setDeleteCheck={setDeleteCheck}
        handleEditSnackbar={handleEditSnackbar}
        setEditCheck={setEditCheck}
        editCheck={editCheck}
        setAdvanceSearchData={setAdvanceSearchData}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        predictdata={predictdata}
      />
      <Table data={data} setSl_no={setSl_no} setPredictdata={setPredictdata} sl_no={sl_no}/>
      <Snackbar 
        snackbarOpen={snackbarOpen} 
        handlesnackbarClose={handlesnackbarClose}
        snackbarSeverity={snackbarSeverity}
        snackbarMessage={snackbarMessage}
      />
      <Footer/>
    </div>
  )
}

export default Home