import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


interface BlogPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    ['wp:featuredmedia']?: {
      source_url: string;
    }[];
  };
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('https://www.immersiveinfotech.com/blog/wp-json/wp/v2/posts?_embed=true')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="contact-us ">
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={6} md={6} sm={12} >
              <h1 className="banner-heading">
                Blog
              </h1>
            </Col>
            </Row>
            </Container>
            </section>

      {/* Blog Section */}
      <section className="custom-padding pt-5">
        <div className="container">
          <div className="row">
            {/* Blog List */}
            <div className="col-lg-8">
              <div className="row">
                {posts.map((post) => (
                  <div className="col-lg-12 mb-4" key={post.id}>
                    <div className="wrapper row">
                      {/* Image */}
                      <div className="col-lg-12">
                        <div className="img-holder">
                          {post._embedded?.['wp:featuredmedia'] ? (
                            <img
                              src={post._embedded['wp:featuredmedia'][0].source_url}
                              className="img-fluid"
                              alt={post.title.rendered}
                            />
                          ) : (
                            <svg
                              className="bd-placeholder-img card-img-top"
                              width="100%"
                              height="200"
                              xmlns="http://www.w3.org/2000/svg"
                              preserveAspectRatio="xMidYMid slice"
                              role="img"
                              aria-label="Placeholder"
                            >
                              <rect width="100%" height="100%" fill="#55595c" />
                              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                Thumbnail
                              </text>
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="col-lg-12">
                        <div className="content-wrap">
                          <h4
                            className="post-title mt-2"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                          <div className="elementor-post__meta-data">
                            <span className="elementor-post-date">
                              {new Date(post.date).toLocaleDateString()}
                            </span>{' '}
                            | <span className="elementor-post-avatar">No Comments</span>
                          </div>
                          <p
                            className="lead mt-2"
                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.slice(0, 150) }}
                          />
                          <Link to={`/blog/${post.slug}`} className="button button1">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="col-lg-4">
              <div className="wrapper">
                <div className="content-wrap">
                  <h2 className="mt-2">Recent Posts</h2>
                  <div className="recent-post">
                    {posts.slice(0, 5).map((post) => (
                      <div key={post.id}>
                        <Link to={`/blog/${post.slug}`} className="button button1">
                          <h2
                            className="post-title mt-2"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
