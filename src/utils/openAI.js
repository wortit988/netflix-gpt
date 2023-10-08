import OpenAI from "openai";
import { OPENAI_KEY } from "./constant";

const openAI = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAI;