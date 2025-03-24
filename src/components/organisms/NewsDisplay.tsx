import { NewsArticle } from "../../types/news.interface";
import { ViewType } from "../../types/view.interface";
import WithIframe from "../hoc/withIframe";
import NewsItem from "../molecules/NewsItem";

interface NewsDisplayProps {
    articles: NewsArticle[];
    layout?: ViewType;
}

const NewsItemWithIframe = WithIframe(NewsItem);

const NewsDisplay = ({ articles, layout="grid" }: NewsDisplayProps) => {
    return (
        <div className={`w-full max-w-[1200px] mx-auto ${layout === "grid" && "lg:grid-cols-3"} grid grid-cols-1 gap-8`}>
            {articles.map((article, index) => (
                <div key={index} className="flex justify-center">
                    <NewsItemWithIframe
                        url={article.url}
                        title={article.title}
                        description={article.description || "N/A"}
                        imageUrl={article.urlToImage || "N/A"}
                        publishedAt={article.publishedAt}
                        layout={layout}
                        containerClass={`${layout === "list" && "w-full"}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default NewsDisplay;
