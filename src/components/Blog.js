import React from "react";
import Header from "./Header";

const Blog = () => {
  return (
    <div>
      <Header /> {/* Include the Header component here */}
      <div
        style={{
          backgroundImage: "url('path/to/your/image.jpg')",
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: "50px"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="blog-card">
                <h2 className="blog-title">Blog Title</h2>
                <p className="blog-date">Published on August 8, 2023</p>
                <img
                  src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?q=10&h=200"
                  alt="Blog post"
                  className="img-fluid mb-6"
                />
                                <p className="blog-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dapibus, turpis non tincidunt bibendum, dui quam
                  sagittis sapien, et fermentum mauris elit ac neque.
                </p>

                                <img
                  src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="Blog post"
                  className="img-fluid mb-3"
                />
                                <p className="blog-content">
                  Integer a volutpat elit. Maecenas nec aliquam nisl. Vivamus
                  et venenatis tellus. Vivamus convallis ligula eu tortor
                  volutpat, sit amet volutpat mi euismod.
                </p>

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSBzDHDFdKeLwG1wPBo0SWncl4XNLhrvpVg&usqp=CAU"
                  alt="Blog post"
                  className="img-fluid mb-3"
                />

                <p className="blog-content">
                  Phasellus ullamcorper, massa eget posuere bibendum, tortor
                  ipsum elementum enim, a dapibus justo tellus id odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
