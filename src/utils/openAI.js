import OpenAI from "openai";
import { OPENAI_KEY } from "./constant";

const openAI = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default openAI;