/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import _ from 'lodash';

function decodeParam(val) { if (!(typeof val === 'string' || val.length === 0)) {
    return val;
  }

  try {
    return decodeURIComponent(val);
  } catch (err) {
    if (err instanceof URIError) {
      err.message = `Failed to decode param '${val}'`;
      err.status = 400;
    }

    throw err;
  }
}

// Match the provided URL path pattern to an actual URI string. For example:
//   matchURI({ path: '/posts/:id' }, '/dummy') => null
//   matchURI({ path: '/posts/:id' }, '/posts/123') => { id: 123 }
function matchURI(route, path) {
  const match = route.pattern.exec(path);

  if (!match) {
    return null;
  }

  const params = Object.create(null);

  for (let i = 1; i < match.length; i++) {
    params[route.keys[i - 1].name] = match[i] !== undefined ? decodeParam(match[i]) : undefined;
  }

  return params;
}

// Find the route matching the specified location (context), fetch the required data,
// instantiate and return a React component
function resolve(routes, context, articles, data) {
//  for (const route of routes) {
//    const params = matchURI(route, context.error ? '/error' : context.pathname);
//
//    if (!params) {
//      continue;
//    }

    var route = routes[0];
    
    return Promise.all([
      route.load(),
      Promise.all(Object.keys(articles).map(key => {
        return fetch(articles[key], { method: "GET" })
               .then(resp => resp.json())
               .then(response => { 
                  return { response, key };
               })
               .catch(error => console.log(error));
      }))
    ])
    .then(([Page, renderedArticles]) => {
       var articleObj = _.groupBy(renderedArticles, 'key');
       return <Page route={route} context={context} error={context.error} articles={articleObj} />;
    });
//  }
//  
//  const error = new Error('Page not found');
//  error.status = 404;
//  return Promise.reject(error);
}

export default { resolve };
