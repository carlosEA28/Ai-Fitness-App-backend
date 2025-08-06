import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutricionService } from "../services/CreateNutricionService";
import { UserDataProps } from "../interfaces/props";

export class CreateNutricionController {
  async execute(httpRequest: FastifyRequest, httpReply: FastifyReply) {
    const data = httpRequest.body as UserDataProps;

    const create = new CreateNutricionService();

    const nutricion = await create.execute(data);

    return nutricion;
  }
}
