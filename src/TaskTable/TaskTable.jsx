import { React, useState } from "react";
import { Table } from "reactstrap";
import TaskTableRow from "./TaskTableRow";

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);

  // TODO: Create a statement that will fetch all tasks on
  // the load of the application and store the data into the tasks piece of state

  return (
    <>
      {/* TODO: Build a form component and render it here */}
      <h2>Current Tasks:</h2>
      <p>
        There are <span className="text-success">{tasks.length}</span> total
        tasks, including{" "}
        <span className="text-danger">
          {/* TODO: Display how many tasks are incomplete */}
        </span>{" "}
        that are incomplete.
      </p>
      <Table striped bordered size="sm">
        <thead className="thead-dark">
          <tr>
            <th width="5%"></th>
            <th width="70%">Description</th>
            <th width="20%">Created</th>
            <th width="5%"></th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: Render all the tasks from the tasks state here using list rendering */}
        </tbody>
      </Table>
    </>
  );
};

export default TaskTable;
