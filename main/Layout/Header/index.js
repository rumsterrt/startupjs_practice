import React from 'react'
import { observer, useLocal } from 'startupjs'
import './index.styl'
import { Row, Button, Div, Span, Icon } from '@startupjs/ui'
import { faBars, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  const [, $sidebar] = useLocal('_session.sidebar')

  return pug`
    Row.menu(align='between' vAlign="center")
      Row(vAlign="center")
        Button(color='white' icon=faBars onPress=() => $sidebar.set({name:'main'}))
        Row(vAlign='center').left
          Icon(icon=faSmile size=40 color='#fff')
          Div.smile
            Span.white(variant='description') HELLO
            Span.white(variant='h6') NIRAJ
      Button(color='white' icon=faCalendarCheck onPress=() => $sidebar.set({name:'event', position:'right', koef: 0.9}) variant='text' size='l')
  `
}

export default observer(Header)
