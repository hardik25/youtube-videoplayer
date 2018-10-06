import React from 'react';
import VideoListItem from './videoPreview';

const VideoList = (props) => {
      const videoArray = props.videos.map((video) => {
        return (<VideoListItem
                  onVideoSelect={props.onVideoSelect}
                  key={video.etag}
                  video={ video } />);
      });
      return (<ul className="col-md-4 list-group">
               { videoArray }
      </ul>);
};

export default VideoList;
