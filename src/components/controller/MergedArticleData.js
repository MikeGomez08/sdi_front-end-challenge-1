import authors from '../database/author.json';
import news from '../database/news.json';
import React from 'react';

const MergedArticleData = () => {
    //Merged the two database as item.id as primary key and foreign key(author.id).
    const mergedData = authors.map(item1 => {
        const matchingItem = news.find(item2 => item2.id === item1.id);
        return { ...item1, ...matchingItem };
    });

    // Filter the merged data to show only the item with id = 1 and author id = 1
    const filteredData = mergedData.filter(item => item.id === 1 && item.author_id === 1);

    return (
        <div className="MergedArticle">
            {filteredData.map(item => (
                <div className='MergedArticleDetails' key={item.id}>
                    <h3>{item.name}</h3>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    <a href={`/articles/${item.id}`}>Read Article</a>
                </div>
            ))}
        </div>
    )
}

export default MergedArticleData
