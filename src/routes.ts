import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNutricionController } from "./controllers/CreateNutricionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (req: FastifyRequest, res: FastifyReply) => {
    console.log("Rota");

    res.send({ ok: true });
  });

  fastify.post("/create", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateNutricionController().execute(req, res);
  });
}
