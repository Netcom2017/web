import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArticleLayout from "../Common/ArticleLayout";
import posts from "../../sample-data/blog-posts/posts.json";

class BlogMain extends Component {
  render() {
    return (
      <main>
        <div class="services-area  mt-3 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center">
                  <span className="border-left-1"></span>
                  <span> Blogs</span>
                  <span className="border-right-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </main>
    );
  }
}

export default BlogMain;
