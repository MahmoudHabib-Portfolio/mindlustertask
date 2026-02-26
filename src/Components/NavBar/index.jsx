import Styles from "./style.module.scss";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { IoGridOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

function AppTitle(){
  return(
    <span className={Styles.mHead}>kanban board</span>
  )
}

function TaskBar(){
  return(
    <span className={Styles.taskBar}>{10} tasks</span>
  )
}

/* search_Field */
const SearchField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7C7C8D',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#ebf0f0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7C7C8D',
      borderWidth: '0rem'
    }
  },
});

const NavBar = () => {

  const [search, setSearch] = useState("");

  return (
    <nav className={Styles.mNav}>
      {/* App Logo */}
      <div>
        <ListItem style={{padding: "0px"}}>
        <ListItemAvatar style={{
           fontSize:"1.5em",
           minWidth:"35px",
           textAlign: "center",
           background:"#3c64d7",
           color: "#fff",
           padding:"0.4em 0.5em 0.3em 0.5em",
           borderRadius:"25%",
           marginRight:"0.5em"}}>
          <IoGridOutline />
        </ListItemAvatar>
        <ListItemText primary={<AppTitle />} secondary={<TaskBar />} />
      </ListItem>
      </div>
      {/* Search Bar */}
      <div className={Styles.searchBox}>
        {/* search_Icon */}
          <div style={{color:"#718EBF", fontSize:"18px", lineHeight:"40px"}}>
            <FiSearch />
          </div>
          {/* Search_Field */}
          <div style={{width:"100%"}}>
          <SearchField
            fullWidth
            value={search}
            sx={{
                "& .MuiOutlinedInput-root":{
                "& .MuiOutlinedInput-notchedOutline": {
                    borderWidth: "0rem",
                    borderStyle: "solid",
                    borderColor: '#7C7C8D',
                    borderRadius: "8px"
                },
                '&.Mui-focused fieldset': {
                    borderColor: "#7C7C8D"
                },
                }
            }}
            inputProps={{
                sx: {
                color: '#7C7C8D',
                fontSize: '14px',
                fontWeight: '600',
                backgroundColor:'#ebf0f0',
                padding:'8px 8px',
                borderRadius: "8px",
                '&::placeholder': {
                        color: '#7C7C8D',
                        opacity: 1
                      }
                },
                }}
                placeholder={"Looking for a task...?"}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                />
          </div>
        </div>
    </nav>
  )
}

export default NavBar;