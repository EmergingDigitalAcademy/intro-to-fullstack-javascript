import axios from 'axios';
import { Component } from 'react';
import { deleteTask, setTaskStatus } from '../utils/api';

class TaskRow extends Component {
   handleClick = async (taskId) => {
      await deleteTask(taskId);
      this.props.refreshTasks();
   }

   handleCheckbox = async (taskId, value) => {
      // console.log(value);
      await setTaskStatus(taskId, value);
      this.props.refreshTasks();
   }
   render = () => {
      const { task } = this.props;
      return <>
         <tr>
            <td>
               <input type="checkbox" checked={task.done} onChange={(event) => this.handleCheckbox(task.id, event.target.checked)}></input>
            </td>
            <td>{task.description}</td>
            <td>{task.done ? 'yes' : 'no'}</td>
            <td>{task.createdAt}</td>
            <td><button onClick={() => this.handleClick(task.id)}>Delete</button></td>
         </tr>
      </>
   }
}
export default TaskRow;