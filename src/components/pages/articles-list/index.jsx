import React from 'react';
import { Link } from 'react-router-dom';

import styles from './articles-list.module.css';

const ArticlesList = () => {
    const articles = [
        { id: 1, title: 'Article 1' },
        { id: 2, title: 'Article 2' },
        { id: 3, title: 'Article 3' },
    ];

    return (
        <div className={styles.container}>
            <h1>Articles</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticlesList;