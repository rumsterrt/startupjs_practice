import React from 'react'
import { Button, Row, Icon, Div, Span } from '@startupjs/ui'
import { observer } from 'startupjs'
import { faSmile, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import './index.styl'

const ReplyView = ({ author, message, date, avatar, tags = [] }) => {
  return pug`
    Row.root
      Icon(icon=faSmile size='xl')
      Div.body
        Row.topBlock
          Span.author.red #{author}
          Button.removeButton(icon=faTimesCircle variant='text' iconColor='#D11B1E')
        Span.message #{message + ' '}
          Span.red #{tags.map(tag => '#'+ tag).join(' ')}
        Span.date #{date}
  `
}

export default observer(ReplyView)
