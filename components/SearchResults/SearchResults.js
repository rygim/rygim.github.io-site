import React from 'react';
import Card from '../Card';
import { Timeline } from 'react-twitter-widgets';
import _ from 'lodash';
import StripTags from 'striptags';

class SearchResults extends React.Component {
  render() {
    var self = this;
    var results = this.props.searchResults;
    var values = _.values(this.props.articles);
    var articles = _.map(_.flatMap(values), s => s.response);

    if(!results || results.length == 0){
      return (
        <div>
          <h3>Search Results</h3>
          <p>
            No results! <a href='/'>Return to the main page</a>
          </p>
        </div>);
    }
 
    var viewResults = _.map(results, function(result, n) {
       var blog = _.find(articles, s => {
          return s.slug === result.ref;
       });
       return (<a href={'/?blog=' + blog.slug} className='list-group-item list-group-item-action flex-column align-items-start'>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{blog.title}</h5>
                  </div>
                  <p className="mb-1">{StripTags(blog.titleContent, [], ' ')}</p>
                  <small>{blog.date}</small>
           </a>);
    });

    return (
      <div>
        <h3>Search Results</h3>
        <div className='list-group'>
          {viewResults}
        </div>
      </div>
    );
  }
}

export default SearchResults;
