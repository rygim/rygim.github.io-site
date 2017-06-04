import React from 'react';
import Card from '../Card';
import Lunr from 'lunr';
import _ from 'lodash';

class SearchWidget extends React.Component {

  componentWillMount() {
     this.setState({});
     var self = this;
     var values = _.values(this.props.articles);
     var articles = _.map(_.flatMap(values), s => s.response);

     this.searchIndex = Lunr(function() {
       this.field('title')
       this.field('body')
       var lunrSelf = this;
 
       _.each(articles, function(blog) {
          lunrSelf.add({
            "title": blog.title,
            "body": blog.content,
            "id": blog.slug
          });
          lunrSelf.add({
            "title": blog.title.toLowerCase(),
            "body": blog.content.toLowerCase(),
            "id": blog.slug
          });
       });
     });
  }
  
  search() {
    if(this.state.textVal) {
      var results = this.searchIndex.search(this.state.textVal);
      console.log('search results', results);
      this.props.onSearch(results);
    } 
    else {
      console.log('display empty error message');
    }
  }

  handleTextboxChange(evt) {
     this.setState({ textVal: evt.target.value.substr(0, 100) });
  }
  
  render() {
    console.log('search props', this.props);
    var self = this;
    return (
      <Card title='Search'>
        <div className="input-group">
            <input type="text" className="form-control" onChange={this.handleTextboxChange.bind(self)} placeholder="Search for..." />
            <span className="input-group-btn">
                <button onClick={this.search.bind(self)} className="btn btn-secondary" type="button">Go!</button>
            </span>
        </div>
      </Card>
    );
  }
}

export default SearchWidget;
