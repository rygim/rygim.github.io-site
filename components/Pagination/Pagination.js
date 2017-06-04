import React from 'react';
import Link from '../Link';

class Pagination extends React.Component {
  render () { 
    let components = [];
    let page = parseInt(this.props.page);
    if(page >= 2){
       var href = "/?page=" + (page - 1);
       if(page == 2) {
         href="/";
       }
       components.push(<li className="page-item"><a className="page-link" href={href}>&larr; Newer</a></li>);
    }
    else {
       components.push(<li className="page-item disabled"><a className="page-link" href="/">&larr; Newer</a></li>);
    }

   let lastPage = this.props.totalItems / parseInt(this.props.maxItems);


   if(page >= lastPage) {
       components.push(<li className="page-item disabled"><a className="page-link" href="/">Older &rarr;</a></li>);
   }
   else {
       var href = "/?page=" + (page + 1);
       components.push(<li className="page-item"><a className="page-link" href={href}>Older &rarr;</a></li>);
   }
    
    return (
      <ul className="pagination justify-content-center mb-4">
        {components}
      </ul>
    );
  }
}

export default Pagination;
