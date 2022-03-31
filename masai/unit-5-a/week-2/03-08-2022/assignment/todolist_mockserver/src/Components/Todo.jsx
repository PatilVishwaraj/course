
import React from "react";
import TodoInput from "./TodoInput"

function Todo() {
  const [todos, setTodos] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getTodos(); // invoke when components mounted for the first time
  }, [page]); // when page changes call this

  const getTodos = () => {
    fetch(`http://localhost:3001/todoData?_page=${page}&_limit=3`)
      .then((res) => res.json())
      .then((res) => {
        setTodos(res);
        setIsError(false);
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const handleAdd = (query) => {
    const PayLoad = {
      title: query,
      status: false,
    };

    const payLoadJson = JSON.stringify(PayLoad);

    setIsLoading(true);
    fetch(`http://localhost:3001/todoData`, {
      method: "POST",
      body: payLoadJson,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        getTodos();
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return isLoading ? (
    <div> ....Loading </div>
  ) : isError ? (
    <div>....Error ... Something Went Wrong</div>
  ) : (
    <div>
      <TodoInput handleAddprops={handleAdd} />

      {todos.map((item) => {
        return <div>{item.title}</div>;
      })}

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default Todo;

