import { useEffect, useState } from "react";
import NewsLayout from "../components/templates/NewsLayout";
import { fetchTopHeadlines } from "../services/newsApi";
import NewsDisplay from "../components/organisms/NewsDisplay";
import { NewsArticle } from "../types/news.interface";
import { useView } from "../context/ViewContext";
import Loader from "../components/atoms/Loader";

const Home = () => {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { view } = useView();

    const fetchNews = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchTopHeadlines({
                country: "us",
                pageSize: 6
            });

            setArticles(data.articles);
        } catch (error) {
            setError("Failed to fetch news. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <NewsLayout>
            <div className="h-full px-8 py-10 flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center">
                    {loading ? (
                        <Loader size={40}/>
                    ) : error ? (
                        <div className="text-center text-gray-600">
                            <p>{error}</p>
                        </div>
                    ) : articles.length === 0 ? (
                        <h1 className="text-center text-gray-600">No new news</h1>
                    ) : (
                        <NewsDisplay articles={articles} layout={view} />
                    )}
                </div>
                <div className="py-8 border">
                    <h1 className="text-xl text-right">Pagination</h1>
                </div>
            </div>
        </NewsLayout>
    );
};

export default Home;
