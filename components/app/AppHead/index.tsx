import Head from 'next/head'
import * as React from 'react'

const headDescription = `The Tunisia entrepreneurship summit is part of the IEEE Region8 Entrepreneurship initiative. This year it's in collaboration between IEEE INSAT Student Branch, and IEEE ENISO Student Branch, under the theme of "INDUSTRY,INNOVATION AND INFRASTRUCTURE".`

const AppHead: React.FunctionComponent = () => {
  return (
    <Head>
      <title>Tunisia Entrepreneurship Summit: Triple I</title>
      <link rel="icon" type="image/webp" href="/favicon.webp" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="Description" content={headDescription} />
      <meta
        name="Author"
        content="wadhah mahrouk https://www.linkedin.com/in/wadhah-mahroug-392a40184/"
      />
    </Head>
  )
}

export default React.memo(AppHead)
