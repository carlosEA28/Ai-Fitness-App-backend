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
    let responseTxt =
      '```json\n{\n  "nome": "Carlos",\n  "sexo": "masculino",\n  "idade": 19,\n  "altura": 1.72,\n  "peso": 72,\n  "objetivo": "hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "07:00",\n      "nome": "Cafe da manha",\n      "alimentos": [\n        "Aveia em flocos (120g)",\n        "Ovos inteiros (3 unidades)",\n        "Claras de ovos (2 unidades)",\n        "Banana (1 unidade grande)",\n        "Pasta de amendoim integral (20g)"\n      ]\n    },\n    {\n      "horario": "10:30",\n      "nome": "Lanche da manha",\n      "alimentos": [\n        "Iogurte natural desnatado (200g)",\n        "Granola sem acucar (50g)",\n        "Frutas vermelhas (150g)"\n      ]\n    },\n    {\n      "horario": "13:30",\n      "nome": "Almoco",\n      "alimentos": [\n        "Peito de frango grelhado (200g)",\n        "Arroz branco cozido (250g)",\n        "Feijao carioca cozido (150g)",\n        "Salada mista (alface, tomate, pepino) a vontade",\n        "Azeite extra virgem (15ml)"\n      ]\n    },\n    {\n      "horario": "16:30",\n      "nome": "Lanche da tarde / Pre-treino",\n      "alimentos": [\n        "Batata doce cozida (200g)",\n        "Carne moida magra (patinho ou acem) (100g)"\n      ]\n    },\n    {\n      "horario": "19:30",\n      "nome": "Jantar / Pos-treino",\n      "alimentos": [\n        "Salmao assado (150g)",\n        "Pure de batata inglesa (200g)",\n        "Brocolis cozidos no vapor (150g)"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Whey Protein (para complementar a ingestao de proteina, principalmente no pos-treino ou lanches)",\n    "Creatina Monohidratada (5g diariamente, para aumento de forca e massa muscular)",\n    "Multivitaminico (para garantir o aporte de vitaminas e minerais essenciais)",\n    "Omega 3 (1-2g de EPA+DHA diariamente, para saude geral e recuperacao)"\n  ]\n}\n```';

    try {
      let jsonString = responseTxt
        .replace(/```\w*\n/g, "")
        .replace(/\n```/g, "")
        .trim();

      let jsonObject = JSON.parse(jsonString);

      return { data: jsonObject };
    } catch (error) {}
  });

  fastify.post("/create", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateNutricionController().execute(req, res);
  });
}
