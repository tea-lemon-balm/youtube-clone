/**
 * Component: Video
 * *title *Channel *Views *Timestamp *image1 *image2
 * * ~/picture/Video_component.jpg
 */
import React from 'react'
import { Avatar } from '@material-ui/core'

import './VideoCard.css'

function VideoCard({ img, title, channel, views, timestamp, channelImg }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={img} alt="" />
      <div className="videoCard__info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImg} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} ⚫ {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
