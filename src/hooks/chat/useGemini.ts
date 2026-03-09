import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export const useGemini = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = async (userMessage: string) => {
        if (!API_KEY) {
            setError('Brak klucza API Gemini. Skonfiguruj VITE_GEMINI_API_KEY w pliku .env');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            // Dodaj wiadomość użytkownika
            setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

            const genAI = new GoogleGenerativeAI(API_KEY);

            // System context - teraz używany!
            const systemContext = `Jesteś asystentem na stronie portfolio Michała Matsalaka. 
                Odpowiadasz na pytania dotyczące jego doświadczenia, umiejętności i projektów.
                Michał to Software Engineer z 3-letnim doświadczeniem, pracujący w Sabre Poland.
                Znane języki: polski (ojczysty), ukraiński (ojczysty), rosyjski (C1), angielski (B2).
                Technologie: Java, Spring Boot, React, TypeScript, JavaScript, Node.js, MySQL, AWS, CI/CD.
                Bądź pomocny, uprzejmy i zwięzły. Jeśli nie znasz odpowiedzi, zasugeruj kontakt przez formularz.`;

            // Utwórz model z system instructions
            const model = genAI.getGenerativeModel({
                model: 'gemini-2.5-flash',
                systemInstruction: systemContext
            });

            // Przygotuj historię konwersji
            const history = messages.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            }));

            // Rozpocznij czat
            const chat = model.startChat({
                history,
                generationConfig: {
                    maxOutputTokens: 500,
                    temperature: 0.7,
                },
            });

            // Wyślij wiadomość
            const result = await chat.sendMessage(userMessage);
            const response = result.response.text();

            // Dodaj odpowiedź asystenta
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);

        } catch (err: any) {
            console.error('Błąd Gemini API:', err);

            // Obsługa konkretnych błędów
            if (err.message?.includes('API key')) {
                setError('Nieprawidłowy klucz API. Sprawdź VITE_GEMINI_API_KEY w pliku .env');
            } else if (err.message?.includes('404')) {
                setError('Model nie został znaleziony. Upewnij się, że używasz prawidłowej nazwy modelu.');
            } else if (err.message?.includes('quota')) {
                setError('Przekroczono limit zapytań do API. Spróbuj później.');
            } else {
                setError('Przepraszam, wystąpił problem. Spróbuj ponownie później.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        setMessages([]);
        setError(null);
    };

    return {
        messages,
        isLoading,
        error,
        sendMessage,
        clearChat
    };
};