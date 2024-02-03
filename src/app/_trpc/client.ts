import { createTRPCReact } from "@trpc/react-query";
import { createTRPCNext } from "@trpc/next";

import { type AppRouter } from "@/server/routers";

export const trpc = createTRPCReact<AppRouter>({});
