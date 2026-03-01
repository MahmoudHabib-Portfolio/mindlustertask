import "../Styles/style.scss";
import Styles from "./style.module.scss";
import {NavBar} from "../Components";
import { Divider } from "@mui/material";
import {Todo} from '../Components';
import {InProgress} from '../Components';
import {InReview} from '../Components';
import {Completed} from '../Components';

const Layout = () => {
  return (
    <div>
      {/* App Nav bar */}
        <NavBar />
        <Divider />
        {/* Tasks Container */}
        <div className={Styles.taskCont}>
              {/* ToDo Tasks */}
              <div>
                <Todo />
              </div>
              {/* In Progress Tasks */}
              <div>
                <InProgress />
              </div>
              {/* In Review Tasks */}
              <div>
                <InReview />
              </div>
              {/* Completed Tasks */}
              <div>
                <Completed />
              </div>
        </div>
    </div>
  )
}

export default Layout;