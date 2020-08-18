import React from 'react'
import { observer, useLocal } from 'startupjs'
import './index.styl'
import { Row, Button, Div, Span, Icon } from '@startupjs/ui'
import { faBars, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import MainSidebar from 'main/components/MainSidebar'

const Header = () => {
  const [, $sidebar] = useLocal('_session.sidebar')

  return pug`
    Row.menu(align='between' vAlign="center")
      MainSidebar.main
      Row(vAlign="center")
        Button.noWide(color='white' icon=faBars onPress=() => $sidebar.set({name:'main'}))
        Row.helloNiraj(vAlign='center')
          Icon.helloNirajIcon(icon=faSmile size=40 color='#fff')
          Div.helloNirajText
            Span.white(variant='description') HELLO
            Span.white(variant='h6') NIRAJ
      Button.noWide(color='white' icon=faCalendarCheck onPress=() => $sidebar.set({name:'event', position:'right', koef: 0.9}) variant='text' size='l')
  `
}

export default observer(Header)
