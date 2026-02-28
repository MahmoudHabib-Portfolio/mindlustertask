import "../Styles/style.scss";
import Styles from "./style.module.scss";
import {NavBar} from "../Components";
import { Divider } from "@mui/material";
import {Todo} from '../Components';
import {InProgress} from '../Components';
import {InReview} from '../Components';
import {Completed} from '../Components';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {fetchTasks} from "../ReduxContainer/taskSlice";

const Layout = () => {
  
  const {tasks, loading, error} = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  /* fetch_Tasks */
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  /* if(loading) return <p>Loading....</p>
  if(error) return <p>Error: {error}</p> */

  return (
    <div>
      {/* App Nav bar */}
        <NavBar />
        <Divider />
        {/* Tasks Container */}
        <div className={Styles.taskCont}>
              {/* ToDo Tasks */}
              <div>
                <Todo Tasks={tasks} />
              </div>
              {/* In Progress Tasks */}
              <div>
                <InProgress Tasks={tasks} />
              </div>
              {/* In Review Tasks */}
              <div>
                <InReview Tasks={tasks} />
              </div>
              {/* Completed Tasks */}
              <div>
                <Completed Tasks={tasks} />
              </div>
        </div>
    </div>
  )
}

export default Layout;