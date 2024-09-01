import React from 'react';
import {useParams} from 'react-router-dom';

import styles from './article.module.css';

const Article = () => {
    const {id} = useParams();
    const articleData = {
        1: {title: 'Article 1', content: 'Content of Article 1'},
        2: {title: 'Article 2', content: 'Content of Article 2'},
        3: {title: 'Article 3', content: 'Content of Article 3'},
    };

    return (
        <div className={styles.container}>
            <h1>{articleData[id]?.title || 'Article not found'}</h1>
            <p>{articleData[id]?.content || 'No content available for this article.'}</p>
        </div>
    );
};

export default Article;