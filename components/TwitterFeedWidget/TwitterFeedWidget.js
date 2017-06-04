import React from 'react';
import Card from '../Card';
import { Timeline } from 'react-twitter-widgets';

class TwitterFeedWidget extends React.Component {
  render() {
    return (
      <Card title="Twitter Feed">
          <Timeline dataSource={{
              sourceType: 'profile',
              screenName: 'rgimmy'
            }}
            options={{
              height: 600
            }}
          />
      </Card>
    );
  }
}

export default TwitterFeedWidget;
