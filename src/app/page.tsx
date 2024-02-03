import { Suspense } from "react";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid min-h-screen w-full place-items-center bg-[#0a0c10] text-white">
      <Suspense fallback={<div className="text-white">Loading....</div>}>
        <TodoList />
      </Suspense>
    </div>
  );
}
