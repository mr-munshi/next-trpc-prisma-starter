import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";

export const todoRouter = router({
  getAll: publicProcedure.query(async () => {
    return [1, 2, 3, 4, 5];
  }),
});
