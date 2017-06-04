import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';
import Nav from '../Nav';
import Pagination from '../Pagination';
import MainPageBlogItem from '../MainPageBlogItem';
import Card from '../Card';
import TwitterFeedWidget from '../TwitterFeedWidget';
import AboutWidget from '../AboutWidget';
import SearchWidget from '../SearchWidget';
import SearchResults from '../SearchResults';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  onSearchResults(results) {
     this.searchResults = results;
     this.forceUpdate();
  }

  render() {
    var content = <div {...this.props} className={cx(s.content, this.props.classname)} />;
    if(this.searchResults) {
      content = <SearchResults searchResults={this.searchResults} blogs={this.props.blogs} articles={this.props.articles} />
    }

    console.log('Layout', this.props);

    var self = this;
    return (
      <div>
        <Nav />
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {content}
                </div>
                <div className="col-md-4">
                    <SearchWidget onSearch={self.onSearchResults.bind(self)} articles={this.props.articles} />
                    <AboutWidget />
                    <TwitterFeedWidget />
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
  }
}

export default Layout;
