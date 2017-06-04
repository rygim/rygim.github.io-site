/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import MainPageBlogItem from '../../components/MainPageBlogItem';
import FullBlogItem from '../../components/FullBlogItem';
import Pagination from '../../components/Pagination';
import _ from 'lodash';

class HomePage extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    const maxItems = 2;
    var self = this;
    var routePath = undefined;
    var values = _.values(this.props.articles);
    
    console.log(this.props.context.pathname);
    if(this.props.context && this.props.context.pathname && this.props.context.pathname.substring(1) !== ""){
      routePath = this.props.context.pathname.substring(1);
    }
   
    if(routePath){
      var flatMappedArticles = _.flatMap(values);
      var path = routePath;
      var values = _.values(this.props.articles);
      var flatMappedArticles = _.flatMap(values);
      var foundBlog = _.find(flatMappedArticles, s => s.response.slug === path);
      return (<Layout className={s.content}>
         <FullBlogItem {...foundBlog.response} />
      </Layout>);
    }
 
    var page = this.props.context && this.props.context.query && this.props.context.query.page ? this.props.context.query.page : 1;

    var pageArticles = _.chunk(_.reverse(this.props.route.data.frontpage), maxItems)[page - 1];
    
    var blogs = _.map(pageArticles, function(key, n) {
      var blog = self.props.articles[key][0];
      return <MainPageBlogItem key={n} {...blog.response} />;
    });

    return ( 
      <Layout className={s.content} {...this.props}>
          {blogs}
          <Pagination page={page} totalItems={values.length} maxItems={maxItems} />
      </Layout>
    );
  }

}

export default HomePage;
