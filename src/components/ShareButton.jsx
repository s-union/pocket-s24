import React from 'react'

import { LineIcon, LineShareButton } from 'react-share'

export default function ShareButton({ url, title }) {
  return (
    <>
      <LineShareButton url={url} title={title}>
        <LineIcon size={40} round />
      </LineShareButton>
    </>
  )
}
