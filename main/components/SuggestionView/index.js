import React from 'react'
import { Div, Button, H6, Span, Icon, Row } from '@startupjs/ui'
import { observer } from 'startupjs'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle, faHeart } from '@fortawesome/free-regular-svg-icons'
import ReplyForm from '../ReplyForm'
import ReplyView from '../ReplyView'
import './index.styl'

const SuggestionView = ({ title, description, votes, author, date, replies, index }) => {
  return pug`
    Div.root
      Div.id 
        Span.idText #{index}
      Div.body
        H6.title #{title}
        Span.subtitle.red #{author + ' '}
          Span #{date}
        Span.description #{description}
        Row.buttons(align='between' vAlign='center')
          Row(align='center' vAlign='center')
            Icon(icon=faCheck color='#D11B1E')
            Span.red #{' VOTE: '}
              Span #{votes}
          Row(align='between' vAlign='center')
            Button(icon=faTimesCircle variant='text' iconColor='#D11B1E' onPress=() => {})
            Button(icon=faHeart variant='text' iconColor='#D11B1E' color='#D11B1E' onPress=() => {}) MANAGE
        each reply, index in replies
          ReplyView(...reply key=index)
        ReplyForm
  `
}

export default observer(SuggestionView)
