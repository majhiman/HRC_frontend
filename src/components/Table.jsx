import { DataGrid } from '@mui/x-data-grid';
import React,{useState} from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
  mainDivStyle:{
    backgroundColor:"#3e505d"
  }
}));

const columns = [
  { field: 'sl_no', headerName: 'SL', width: 70 },
  { field: 'business_code', headerName: 'Business Code', width: 130,align: "left" },
  { field: 'cust_number', headerName: 'Customer Number', width: 133,align: "left" },
  { field: 'clear_date', headerName: 'Clear Date', width: 130,align: "left" },
  { field: 'buisness_year',headerName: 'Business Year',type: 'number',width: 130,align: "left" },
  { field: 'doc_id', headerName: 'Document ID', width: 130,align: "left" },
  { field: 'posting_date', headerName: 'Posting Date', width: 130,align: "left" },
  { field: 'document_create_date', headerName: 'Document Create Date', width: 180,align: "left" },
  { field: 'due_in_date', headerName: 'Due Date', width: 130,align: "left" },
  { field: 'invoice_currency', headerName: 'Invoice Currency', width: 130,align: "left" },
  { field: 'document_type', headerName: 'Document Type', width: 130,align: "left" },
  { field: 'posting_id', headerName: 'Posting ID', width: 130,align: "left" },
  { field: 'total_open_amount', headerName: 'Total Open Amount', width: 150,align: "left" },
  { field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 180,align: "left" },
  { field: 'cust_payment_terms', headerName: 'Customer Payment Terms', width: 180,align: "left" },
  { field: 'invoice_id', headerName: 'Invoice Id', width: 130,align: "left" },
  {field: 'aging_bucket', headerName: 'Aging Bucket', width: 180,align: "left"}
];


const Table = ({data,setSl_no,setPredictdata,sl_no}) => {
  const classes = useStyles();  

  const handleSl_no = (dataGridSl_no) => {
    setSl_no(dataGridSl_no);
    //console.log(dataGridSl_no.rows);    
  }
  const currentlySelected = (selections) => {
    // console.log(selections.row.doc_id)
    //if(sl_no.length>0 && sl_no.length<=1)
    setPredictdata(selections.row.doc_id);
  }

  
  

  //=========== Page Size ==============
  const [pageSize, setPageSize] = useState(5);

  return (
    <div className={classes.mainDivStyle} style={{ height: 405, width: '100%' }}>
        <DataGrid
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          getRowId={(r) => r.sl_no}
          rows={data}
          columns={columns}          
          rowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
          checkboxSelection
          onSelectionModelChange={
            //itm => console.log(itm)
            itm => handleSl_no(itm)           
          }
          
          onCellClick={currentlySelected}

          style={{color:"white"}}
          sx={{
            ".MuiTablePagination-displayedRows":{
              color:"white"
            },
            ".MuiTablePagination-toolbar":{
              color:"white"
            },
            ".MuiTablePagination-actions":{
              color:"white"
            },
            ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root":{
              color:"white"
            },
            ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{
              color:"white"
            },
            ".MuiSvgIcon-root":{
              color:"aliceblue"
            }
          }}
        />
    </div>
  )
}

export default Table