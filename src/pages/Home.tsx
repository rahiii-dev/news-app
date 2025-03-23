import { useEffect, useState } from "react";
import NewsLayout from "../components/templates/NewsLayout";
import { fetchTopHeadlines } from "../services/newsApi";
import NewsGrid from "../components/organisms/NewsGrid";
import { NewsArticle } from "../types/news.interface";



const Home = () => {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchNews = async () => {
        setLoading(true);
        try {
            const data = await fetchTopHeadlines({
                country: "us",
                pageSize: 7
            });

            setArticles(data.articles);
        } catch (error) {
            console.log("Error: ", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchNews();
    }, [])
    
    return (
        <NewsLayout onToggleView={() => {}}>
            <div className="h-full px-8 py-10 flex flex-col justify-between">
                <div className="flex-1 border">
                    {loading ? <h1>Loading....</h1>
                                : articles.length  === 0 ? <h1>No new news</h1> 
                                                        :  <NewsGrid articles={articles} />}
                </div>
                <div className="py-8 border">
                    <h1 className="text-xl text-right">Pagination</h1>
                </div>
            </div>
        </NewsLayout>
    );
}

export default Home;
