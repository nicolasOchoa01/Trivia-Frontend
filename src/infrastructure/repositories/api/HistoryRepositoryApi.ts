import type { IHistoryRepository } from "../../../application/ports/IHistoryRepository";
import type { History } from "../../../domain/entities/History";


export class HistoryRepositoryApi implements IHistoryRepository {
    async getHistoryByUserId(userId: string): Promise<History[]> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";

        const response = await fetch(`${apiUrl}/api/History?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error al obtener el historial desde la API.");
        }
        const data = await response.json();
        return data;
    }

    async getAllHistories(): Promise<History[]> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";

        const response = await fetch(`${apiUrl}/api/History`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error al obtener el historial desde la API.");
        }
        const data = await response.json();
        return data;
    }

    async setHistory(history: History): Promise<void> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";

        const response = await fetch(`${apiUrl}/api/History`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(history)
        });

        if (!response.ok) {
            throw new Error("Error al guardar el historial en la API.");
        }
    }

}