"use client";

import { trpc } from "@/app/_trpc/client";

const TodoList = () => {
  const { data } = trpc.todos.getAll.useQuery();

  if (!data?.length) return <div>No Todos</div>;

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default TodoList;
