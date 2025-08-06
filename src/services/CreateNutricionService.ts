import { UserDataProps } from "../interfaces/props";
import { GoogleGenerativeAI } from "@google/generative-ai";

export class CreateNutricionService {
  async execute({
    name,
    height,
    age,
    gender,
    goal,
    level,
    weight,
  }: UserDataProps) {
    try {
      const genAi = new GoogleGenerativeAI(process.env.API_KEY!);
      const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash" });

      const respose = await model.generateContent(
        `Crie uma dieta completa para uma pessoa com nome: ${name} do sexo ${gender} com peso atual: ${weight}kg, altura: ${height}, idade: ${age} anos e com foco e objetivo em ${goal}, atualmente nível de atividade: ${level} e ignore qualquer outro parametro que não seja os passados, retorne em json com as respectivas propriedades, propriedade nome o nome da pessoa, propriedade sexo com sexo, propriedade idade, propriedade altura, propriedade peso, propriedade objetivo com o objetivo atual, propriedade refeições com uma array contendo dentro cada objeto sendo uma refeição da dieta e dentro de cada refeição a propriedade horário com horário da refeição, propriedade nome com nome e a propriedade alimentos com array contendo os alimentos dessa refeição e pode incluir uma propreidade como suplementos contendo array com sugestão de suplemento que é indicado para o sexo dessa pessoa e o objetivo dela e não retorne nenhuma observação alem das passadas no prompt, retorne em json e nenhuma propriedade pode ter acento.`
      );

      if (respose.response && respose.response.candidates) {
        const jsonText = respose.response.candidates[0]?.content.parts[0]
          .text as string;

        let jsonString = jsonText
          .replace(/```\w*\n/g, "")
          .replace(/\n```/g, "")
          .trim();

        let jsonObject = JSON.parse(jsonString);

        return { data: jsonObject };
      }

      return { message: "ok" };
    } catch (error) {
      console.log(error);
      throw new Error("Failed create");
    }
  }
}
