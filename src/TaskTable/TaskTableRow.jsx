import {
  trashIcon,
  checkboxCompleteIcon,
  checkboxEmptyIcon,
} from "../utils/icons";
import moment from "moment";
import { Button } from "reactstrap";

// TODO: accept the task object from the TaskTable Component

const TaskTableRow = (props) => {
  const { task } = props;
  return (
    <>
      <tr
        key={`task-${task.id}`}
        className={task.done && "bg-success text-white"}
      >
        <td className="align-middle text-center">
          <Button
            size="lg"
            color={`${!task.done && "light"}`}
            className={`${task.done && "text-white"}`}
            onClick={() => {
              /* TODO: Create a click handler that will change the state of this task.done */
            }}
          >
            {/* TODO: Conditionally Render a complete or empty checkbox based on the state of task.done  */}
          </Button>
        </td>
        <td className="align-middle">{task.description}</td>
        <td className="align-middle">{moment(task.createdAt).fromNow()}</td>
        <td className="align-middle text-center">
          <Button
            size="sm"
            color="danger"
            onClick={() => {
              /* TODO: Create a click handler that will delete this task */
            }}
          >
            {trashIcon}
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TaskTableRow;
