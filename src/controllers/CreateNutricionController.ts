import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutricionService } from "../services/CreateNutricionService";

export class CreateNutricionController {
  async execute(httpRequest: FastifyRequest, httpReply: FastifyReply) {
    const create = new CreateNutricionService();

    const nutricion = await create.execute();

    return nutricion;
  }
}
