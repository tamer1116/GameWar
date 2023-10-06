import React, { useState } from "react";
import "./Blog.css";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";

function Blog() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleText = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const blogPosts = [
    {
      title: "Post 1",
      imageSrc:
        "https://gamewar-codezeel.myshopify.com/cdn/shop/articles/3_1400x.jpg?v=1671527978",
      date: "15 July, 2022",
      comments: 0,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    },
    {
      title: "Post 2",
      imageSrc:
        "https://gamewar-codezeel.myshopify.com/cdn/shop/articles/7_1400x.jpg?v=1671528044",
      date: "15 July, 2022",
      comments: 0,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    },
    {
      title: "Post 3",
      imageSrc:
        "https://gamewar-codezeel.myshopify.com/cdn/shop/articles/4_1400x.jpg?v=1671528004",
      date: "15 July, 2022",
      comments: 0,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    },
  ];

  return (
    <div className="blogcontainer">
      <div>
        <h1>From The Blog</h1>
      </div>
      <div className="cards">
        {blogPosts.map((post, index) => (
          <div className="cardd" key={index}>
            <img
              className="image1"
              src={post.imageSrc}
              alt={post.title}
            />
            <div className="date-comment">
              <p>
                <BsFillCalendarDateFill /> {post.date}
              </p>
              <p>
                <FaComment />
                <span>{post.comments} comments</span>
              </p>
              <button
                className="read-more-button"
                onClick={() => toggleText(index)}
              >
                Read More
              </button>
            </div>
            {expandedIndex === index && (
              <div className="text-content">
                <p>{post.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
