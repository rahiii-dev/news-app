import axios from "axios";
import { NewsAPIResponse } from "../types/news.interface";

const BASE_URL = "https://newsapi.org/v2";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_NEWS_API_KEY}`
    },
});

export const fetchTopHeadlines = async (filter?: {
    country?: string,
    category?: string,
    pageSize?: number,
    page?: number
}): Promise<NewsAPIResponse> => {
    try {
        const response = await api.get<NewsAPIResponse>("/top-headlines", { params: filter });
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch news");
    }
};

