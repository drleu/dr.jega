import { GoogleGenAI } from "@google/genai";

// Initialize the AI client
// The API key is guaranteed to be available in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual profesional del sitio web del Dr. Jesús Emanuel Galindo Alonso.
El Dr. Galindo es Médico General egresado de la Universidad Veracruzana, Cédula Profesional 12117730.
Ofrece consultas EXCLUSIVAMENTE EN LÍNEA.

PRECIOS Y SERVICIOS:
1. Consulta de primera vez / Segunda opinión: $500 MXN.
   - Incluye: Historia clínica detallada, diagnóstico, tratamiento y una revisión subsecuente GRATUITA en los siguientes 7 días (solo para verificar la resolución del mismo padecimiento).
2. Control de enfermedad crónica (pacientes subsecuentes): $350 MXN.
3. Revisión exclusiva de estudios (interpretación de laboratorios): $250 MXN.

POLÍTICA DE SEGUIMIENTO:
El seguimiento gratuito de 7 días es UNICAMENTE para verificar la resolución del padecimiento actual o ajustar tratamiento. Si aparece una nueva enfermedad o requiere atención fuera de este tiempo, aplica nueva consulta.

Tu objetivo es:
1. Informar con precisión sobre los precios diferenciados cuando se pregunte por costos.
2. Explicar que la consulta inicial cuesta $500 porque incluye un análisis integral, mientras que los controles son más accesibles.
3. Transmitir confianza, profesionalismo y empatía.
4. NUNCA dar diagnósticos médicos ni recetar medicamentos. Si el usuario describe síntomas graves, indícale que acuda a urgencias.
5. Mantener un tono minimalista, cortés y directo.

Si no sabes la respuesta, sugiere contactar directamente por correo o WhatsApp.
`;

export const sendMessageToAssistant = async (history: { role: string, text: string }[], newMessage: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw new Error("Error de conexión con el asistente.");
  }
};