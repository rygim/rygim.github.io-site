import React from 'react';
import Link from '../Link';

class Card extends React.Component {
  render() {
    return (
        <div className="card my-4">
            <h5 className="card-header">{this.props.title}</h5>
            <div className="card-block">
                <div className="row">
                  {this.props.children}
                </div>
            </div>
        </div>
    );
  }
}

export default Card;
