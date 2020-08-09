import React, { useEffect, useState } from 'react'
import { observer, useLocal } from 'startupjs'
import './index.styl'
import { SmartSidebar } from '@startupjs/ui'
import MainSidebar from 'main/components/MainSidebar'
import EventSidebar from 'main/components/EventSidebar'
import { Dimensions } from 'react-native'
import _ from 'lodash'

const Sidebar = ({ children }) => {
  const [render, $render] = useLocal('_session.sidebar')
  const [lastRender, setLastRender] = useState({})

  useEffect(() => {
    if (_.isObject(render)) {
      setLastRender(render)
    }
  }, [render])

  const content = () => {
    switch (lastRender.name) {
      case 'main':
        return pug`
          MainSidebar
        `
      case 'event':
        return pug`
          EventSidebar
        `
    }
    return null
  }
  console.log('asda', Dimensions.get('window').width)
  return pug`
    SmartSidebar(
      backgroundColor='#eeeeee'
      $open=$render
      renderContent=content
      position=lastRender.position || 'left'
      width=Dimensions.get('window').width * (lastRender.koef || 0.8)
    )
      = children
  `
}

export default observer(Sidebar)
