import { Request, Response } from "express";
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export const generateNote =  async (req: Request, res: Response) => {
  const { title, synopsis } = req.body;

  if (!title || !synopsis) {
    return res.status(400).json({ error: "Title and synopsis are required." });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", 
      messages: [
        {
          role: "system",
          content: "You are an assistant that writes clean markdown notes.",
        },
        {
          role: "user",
          content: `Create a markdown-formatted note titled "${title}" based on the following synopsis: ${synopsis}`,
        },
      ],
    });

    const markdown = completion.choices[0].message.content;
    return res.json({ markdown });
  } catch (error) {
    console.error("OpenAI error:", error);
    return res.status(500).json({ error: "Failed to generate note." });
  }
};


