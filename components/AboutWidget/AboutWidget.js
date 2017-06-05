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
              <div className="row">
                 <div className="col-md-4">
                  <img className="rounded" src='http://www.gravatar.com/avatar/1b938f3a9ab80e8315f8aff6f2fc9950' />
                 </div>
                 <div className="col-md-8">
                   <h5 className="mt-0">Ryan Gimmy</h5>
                   <small>Co-Founder <a href='http://visallo.com'>Visallo</a>, Senior Software Engineer</small>
                 </div>
              </div>
             <br />
              <div className="row">
                 <div className="col-md-12">
              Ryan has been developing software since he was in high school and has over 10 years of experience developing software. He considers himself a maker with a specialty in software and data engineering and likes to build things in addition to programming them.
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default AboutWidget;
