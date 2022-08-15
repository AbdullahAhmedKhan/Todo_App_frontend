import { Button, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import SaveIcon from "@mui/icons-material/Save";
import React from "react";
import { useState } from "react";

const Todolist = () => {
  const arrayRemove = (removeId) => {
    const restTodo = todolist.filter((e) => e.id !== removeId);
    setTodolist(restTodo);
  };
  const [todolist, setTodolist] = useState([]);
  const handleTodo = (e) => {
    e.preventDefault();
    const des = e.target.description.value;
    const dat = e.target.date.value;
    const app = {
      id: todolist.length + 1,
      description: des,
      date: dat,
    };
    setTodolist([...todolist, app]);
  };
  return (
    <div>
      <div style={{ backgroundColor: "#303f9f", padding: "25px" }}>
        <p style={{ textAlign: "left", color: "white" }}>Todolist</p>
      </div>
      <form onSubmit={handleTodo}>
        <Input placeholder="Description" type="text" name="description" />
        <Input
          placeholder="Date"
          type="text"
          name="date"
          sx={{
            margin: "5px",
          }}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            marginLeft: "5px",
          }}
        >
          <SaveIcon sx={{ marginRight: "5px", fontSize: "1.2rem" }}></SaveIcon>
          Add
        </Button>
      </form>
      <div>
        <br />
        {todolist.map((a) => (
          <div>
            <br />
            {a.description}&nbsp;&nbsp;
            {a.date} &nbsp;&nbsp;
            <Tooltip title="Delete todo" placement="bottom">
              <DeleteIcon
                onClick={() => arrayRemove(a.id)}
                sx={{ color: "red", marginBlock: "-7px" }}
              ></DeleteIcon>
            </Tooltip>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
