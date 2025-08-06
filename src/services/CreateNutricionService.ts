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
        `Em que ano nasceu Carlos Eduardo Alves Duarte`
      );

      if (respose.response && respose.response.candidates) {
        const jsonText = respose.response.candidates[0]?.content.parts[0]
          .text as string;

        return { data: jsonText };
      }

      return { message: "ok" };
    } catch (error) {
      console.log(error);
      throw new Error("Failed create");
    }
  }
}
