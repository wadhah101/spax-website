import * as React from 'react'
import ReactPlayer from 'react-player/lazy'

const url = '/vid.mp4'

const FactsVideo: React.FunctionComponent = () => {
  return <ReactPlayer width="100%" height="100%" controls url={url} />
}

export default FactsVideo
