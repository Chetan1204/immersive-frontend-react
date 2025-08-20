import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

const BlogInsight: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState(3); // initial posts shown

  const postsToShow = 6;
  const titleLength = 40;
  const excerptLength = 75;

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          `https://www.immersiveinfotech.com/blog/wp-json/wp/v2/posts?_embed=true&per_page=${postsToShow}&orderby=date&order=desc`
        );
        if (!response.ok) throw new Error("Failed to fetch blog posts");

        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    const cleanText = text.replace(/<[^>]*>/g, "");
    return cleanText.length <= maxLength
      ? cleanText
      : cleanText.substring(0, maxLength) + "...";
  };

  const handleTogglePosts = () => {
    setVisiblePosts((prev) =>
      prev === 3 ? blogPosts.length : 3
    );
  };

  if (loading) {
    return <div className="text-center py-5">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Error: {error}</div>;
  }

  return (
    <section className="py-5 pt-0 blog-insight">
      <Container>
        <Row className="justify-content-between row-gap-5">
          <Col lg={5} md={5} sm={12}>
            <div>
              <h2 className="title-text">
                Latest Blog Posts <br /> from Immersive Infotech
              </h2>
              <p className="pera-text">
                Discover our most recent insights and updates
              </p>
              <Link to="/blog" className="partner-btn">
                View All Blogs
              </Link>
            </div>
          </Col>

          <Col lg={12} md={12} sm={12}>
            <Row>
              {blogPosts.slice(0, visiblePosts).map((post) => (
                <Col lg={4} md={6} sm={12} key={post.id} className="mb-4">
                  <div className="blog-box h-100">
                    <div className="blog-inner-box">
                      {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                        <img
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={truncateText(post.title.rendered, titleLength)}
                          className="img-fluid"
                        />
                      ) : (
                        <div className="placeholder-image">
                          <i className="fas fa-newspaper"></i>
                        </div>
                      )}
                      <div className="blog-content">
                        <h3>{truncateText(post.title.rendered, titleLength)}</h3>
                        <div className="blog-time d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <h6 className="mb-0">Blog</h6>
                            <span>8 mins read</span>
                          </div>
                          <div>
                            <span>{formatDate(post.date)}</span>
                          </div>
                        </div>
                        <p className="mb-3">
                          {truncateText(post.excerpt.rendered, excerptLength)}
                        </p>
                        <Link
                          to={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="read-more-link"
                        >
                          Read More <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {blogPosts.length > 3 && (
              <div className="text-center mt-4">
                <button onClick={handleTogglePosts} className="view-more-btn">
                  {visiblePosts === 3 ? "View More" : "View Less"}
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogInsight;
