// require('dotenv').config();
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// // console.log("🔑process.env Using API key:", process.env);
// // console.log("🔑process.env.API_KEY Using API key:", process.env.API_KEY);

// const ai = new GoogleGenerativeAI('AIzaSyBaAk-YgF2TJ4BoSfKVUIFq_BTeLgxmapc');

// async function getGeminiResponse(prompt) {
//     try {
//         const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

//         const chat = model.startChat({
//             generationConfig: {
//                 temperature: 0.7,
//                 topK: 40,
//                 topP: 0.95,
//                 maxOutputTokens: 800,
//             },
//             systemInstruction: {
//                 role: "system",
//                 parts: [
//                     {
//                         text: `You are an AI assistant for an inventory and ecommerce website.

// You only answer questions related to:
// - Inventory management
// - How ecommerce websites work
// - Features and technology used to build this inventory website
// - Website workflows, tracking, logistics, orders, and product handling

// ✅ Do not answer anything outside this scope.

// 📝 Answer in a clean and readable format. Break content every 2-3 lines.

// 📌 Use *bold headings* for key points when needed.

// 🎯 Maintain a helpful and polite tone. Occasionally use formal emojis like ✅ 📦 💡 🛒 — use at least one emoji in the chat.

// Avoid long paragraphs. Be short, clear, and focused.`
//                     }
//                 ]
//             }
//         });

//         const result = await chat.sendMessage(prompt);
//         const response = await result.response;
//         const text = await response.text();

//         // Optional Debug Logs
//         // console.log("📨 Prompt:", prompt);
//         // console.log("💬 Response:", text);

//         return text;
//     } catch (err) {
//         console.error("❌ AI Error:", err.message);
//         throw err;
//     }
// }

// module.exports = getGeminiResponse;

require("dotenv").config();
const axios = require("axios");

async function getGeminiResponse(userMessage) {
    try {
        const API_KEY = process.env.GEMINI_API_KEY;

        if (!API_KEY) {
            console.log("❌ Missing API KEY");
            return "Server error: Missing API key.";
        }

        const MODEL = "gemini-1.5-flash";

        const url = `https://generativelanguage.googleapis.com/v1beta1/models/${MODEL}:generateContent?key=${API_KEY}`;

        console.log("User asked:", userMessage);

        const prompt = `
You are an AI assistant for an ecommerce + inventory website.
Answer only about:
- Inventory
- Stock
- Orders
- Products
- Logistics
- Ecommerce workflow

Never answer anything outside this.
Give short clean answers. Use 1 emoji.

User: ${userMessage}
`;

        const body = {
            contents: [
                {
                    parts: [{ text: prompt }]
                }
            ]
        };

        const response = await axios.post(url, body);

        const text =
            response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response from AI";

        return text;

    } catch (err) {
        console.error("❌ AI Error:", err.response?.data || err.message);
        return "AI could not process your message.";
    }
}

module.exports = getGeminiResponse;
