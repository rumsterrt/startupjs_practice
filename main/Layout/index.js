import React from 'react'
import { observer } from 'startupjs'
import { Div, Layout } from '@startupjs/ui'
import Sidebar from './Sidebar'
import Header from './Header'

import './index.styl'

export default observer(function ({ children }) {
  return pug`
    Layout.layout
      Sidebar
        Header
        Div.body= children
  `
})
