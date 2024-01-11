import React, { useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { searchAPI } from '../Services/services';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#293d4b",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft:"10vw",
    width: '20vw',
    [theme.breakpoints.up('sm')]: {
      marginLeft:"10vw",
      width: '20vw',
    }
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '30ch',
      },
    },
  }));

  const useStyles = makeStyles(theme => ({
    inputStyle:{
        fontSize:"1.4vw !important",
        paddingLeft:"20% !important",
        paddingRight:"0 !important"
    },
    searchIconStyle:{
        fontSize:"1.5vw !important"
    }
    
  }));

const SearchBar = ({setSearch,setSearchValue,searchValue}) => {
    const classes = useStyles();


  const changeSearchHandler = e =>{
    e.preventDefault();
    setSearchValue({
        ...searchValue,
        [e.target.name]:e.target.value
    })
  }

  useEffect(async ()=>{
    setSearch(await searchAPI(searchValue));
    //console.log(searchValue)
  },[searchValue])

  return (
    <div>                          
        <Search>
            <SearchIconWrapper>
              <SearchIcon className={classes.searchIconStyle}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Customer Id"
              name="cust_number"
              inputProps={{ className:classes.inputStyle }}    
              onChange={changeSearchHandler}            
            />
        </Search>
    </div>
  )
}

export default SearchBar