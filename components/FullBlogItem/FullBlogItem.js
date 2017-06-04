import React from 'react';
import Link from '../Link';

class FullBlogItem extends React.Component {

  getContent(content) {
    return {__html: content};
  }

  render() {
    const img = this.props.bannerImage || "http://placehold.it/750x300";
    console.log('blog', this.props);
    return (
        <div className="card mb-4">
            <img className="card-img-top img-fluid" src={img} />
            <div className="card-block">
                <h2 className="card-title">{this.props.title}</h2>
                <p className="card-text" dangerouslySetInnerHTML={this.getContent(this.props.content)} />
                <a href="/" className="btn btn-primary">Back Home &larr;</a>
            </div>
            <div className="card-footer text-muted">
                Posted on {this.props.date} by rgimmy
            </div>
        </div>
    );
  }
}

export default FullBlogItem;
