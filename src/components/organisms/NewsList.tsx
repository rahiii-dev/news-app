import { useEffect } from 'react';
import { fetchTopHeadlines } from '../../services/newsApi';

const NewsList = () => {
    useEffect(() => {
        fetchTopHeadlines({
            country: "us"
        });
    }, [])
    return (
        <div>
            <h1>News</h1>
        </div>
    );
}

export default NewsList;
