import React, { useEffect, useState } from 'react'
import { observer, useLocal } from 'startupjs'
import './index.styl'
import { SmartSidebar } from '@startupjs/ui'
import MainSidebar from 'main/components/MainSidebar'
import EventSidebar from 'main/components/EventSidebar'
import { Dimensions } from 'react-native'
import _ from 'lodash'

const Sidebar = ({ children, style }) => {
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

  return pug`
    SmartSidebar.sidebar(
      style=style
      backgroundColor='#eeeeee'
      $open=$render
      renderContent=content
      position=lastRender.position || 'left'
      width=Math.min(400, Dimensions.get('window').width * (lastRender.koef || 0.8))
      fixedLayoutBreakpoint=10000
    )
      = children
  `
}

export default observer(Sidebar)
