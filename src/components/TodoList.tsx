"use client";

import { trpc } from "@/app/_trpc/client";

const TodoList = () => {
  const getTodos = trpc.todo.getAll.useQuery();

  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
  );
};

export default TodoList;
