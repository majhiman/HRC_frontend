import React from "react";
import { AppBar, Toolbar, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';
import ABC from "../Assets/Group 20399.svg";
import Highradius from "../Assets/logo.svg";
import LeftBottonGroup from "./LeftBottonGroup";
import RightBottonGroup from "./RightBottonGroup";
import SearchBar from "./SearchBar";

const useStyles = makeStyles(theme => ({
    AppBar:{
        backgroundImage:"radial-gradient(#2d4250 ,#2d4250)",
        width:"100%"
    },

    comLogo:{
        height: "3.2vw"
    },

    hrcLogo:{
        height: "3.2vw",
        marginLeft: "22%"
    },
    text:{
        paddingLeft:"2%",
        size:"20vh"
    }
}));

const Header = ({
    refresh,
    handleAddSnackbar,
    sl_no,
    handleWarningSnackbar,
    handleDeleteSnackbar,
    setAddCheck,
    addCheck,
    deleteCheck,
    setDeleteCheck,
    handleEditSnackbar,
    setEditCheck,
    editCheck,
    setAdvanceSearchData,
    setSearchValue,
    searchValue,
    predictdata
    }) => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static" elevation={0} className={classes.AppBar}>
                <Toolbar>
                    <img src={ABC} alt="ABC" className={classes.comLogo} />
                    <img src={Highradius} alt="HRC" className={classes.hrcLogo}/>                   
                </Toolbar>

                <Typography className={classes.text}>
                    Invoice List
                </Typography>
                
                <Toolbar>
                    <LeftBottonGroup 
                        refresh={refresh}
                        setAdvanceSearchData={setAdvanceSearchData}
                        setSearchValue={setSearchValue}
                        sl_no={sl_no}
                        handleWarningSnackbar={handleWarningSnackbar}
                        predictdata={predictdata}
                    />
                    <SearchBar
                        setSearch={setAdvanceSearchData}
                        setSearchValue={setSearchValue}
                        searchValue={searchValue}
                    />
                    <RightBottonGroup 
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
                    />
                </Toolbar>
                
            </AppBar>
        </div>
    );
}

export default Header;
