import React from 'react';
import Card from '../Card';
import { Timeline } from 'react-twitter-widgets';

class AboutWidget extends React.Component {
  render() {
    return (
      <Card title="About Me">
        <div className="col-md-12">
          <div className="media">
            <div className="media-body">
              <h5 className="mt-0">Ryan Gimmy</h5>
              Ryan has been developing software since he was in high school and has over 10 year of experience developing software commercially. He considers himself a maker with a software engineer and likes to build things in addition to programming them.
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default AboutWidget;
