import React from "react";
import Container from "../../layouts/Container";
import articles from "../../data/articles";
import { Link } from "react-router-dom";

const ArticlesSection = () => {
  return (
    <div className="articles-section">
      <Container className="container">
        <div className="section-heading">
          <h2>Articles</h2>
          <a href="#" className="view-all-link">
            View All
          </a>
        </div>

        <div className="articles-list">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>

              <div className="article-info">
                <span className="article-date">{article.date}</span>

                <h4 className="article-title">{article.title}</h4>
                <a href={article.link} className="article-link">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ArticlesSection;
