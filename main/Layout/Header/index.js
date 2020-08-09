import React from 'react'
import { observer, useLocal } from 'startupjs'
import './index.styl'
import { Row, Button } from '@startupjs/ui'
import { faBars, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [, $sidebar] = useLocal('_session.sidebar')

  return pug`
    Row.menu(align='between')
      Button(color='white' icon=faBars onPress=() => $sidebar.set({name:'main'}))
      Button(color='white' icon=faCalendarCheck onPress=() => $sidebar.set({name:'event', position:'right', koef: 0.9}) variant='text' size='l')
  `
}

export default observer(Header)
