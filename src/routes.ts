import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teset", (req: FastifyRequest, res: FastifyReply) => {
    console.log("Rota");

    res.send({ ok: true });
  });
}
