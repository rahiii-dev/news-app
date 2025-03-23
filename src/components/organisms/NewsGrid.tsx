import { NewsArticle } from "../../types/news.interface";
import WithIframe from "../hoc/withIframe";
import NewsGridItem from "../molecules/NewsGridItem";
import NewsListItem from "../molecules/NewsListItem";

interface NewsGridProps {
    articles: NewsArticle[];
}

const NewsGridItemWithIframe = WithIframe(NewsGridItem);

const NewsGrid = ({ articles }: NewsGridProps) => {
    return (
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
                <div key={index} className="flex justify-center">
                    <NewsGridItemWithIframe
                        url={article.url}
                        title={article.title}
                        description={article.description || "No description available"}
                        imageUrl={article.urlToImage || "/placeholder.jpg"}
                        publishedAt={article.publishedAt}
                    />
                </div>
            ))}
        </div>
    );
};

export default NewsGrid;
