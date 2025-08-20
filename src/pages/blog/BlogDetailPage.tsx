// src/pages/BlogDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface BlogPost {
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    author?: { name: string }[];
    'wp:featuredmedia'?: { source_url: string }[];
    'wp:term'?: { name: string }[][];
  };
}

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetch(`https://www.immersiveinfotech.com/blog/wp-json/wp/v2/posts?slug=${slug}&_embed=true`)
      .then(res => res.json())
      .then(data => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div className="text-center py-5">Loading post...</div>;

  return (
    <section className="custom-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto pt-3">
            <div className="posts bg-white p-4 rounded shadow-sm">

              {/* Featured Image */}
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  className="img-fluid mb-4"
                  alt="Featured"
                />
              )}

              {/* Title */}
              <h1
                className="post-title mb-3"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              {/* Meta Info */}
              <p className="post-meta text-muted mb-4">
                <span className="me-2">
                  <i className="bi bi-person-fill"></i>{" "}
                  {post._embedded?.author?.[0]?.name || "Admin"}
                </span>
                |
                <span className="mx-2">
                  <i className="bi bi-calendar-event"></i>{" "}
                  {new Date(post.date).toLocaleDateString()}
                </span>
                |
                <span className="ms-2">
                  <i className="bi bi-folder2-open"></i>{" "}
                  {post._embedded?.['wp:term']?.[0]?.[0]?.name || "Blog"}
                </span>
              </p>

              {/* Post Content */}
              <div
                className="post-description"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
