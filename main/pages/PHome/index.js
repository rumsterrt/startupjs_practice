import React from 'react'
import { ScrollView } from 'react-native'
import './index.styl'
import { Div, Row, H3 } from '@startupjs/ui'
import SuggestionForm from 'main/components/SuggestionForm'
import SuggestionView from 'main/components/SuggestionView'
import EventSidebar from 'main/components/EventSidebar'
import SuggestionBar from 'main/components/SuggestionBar'

import suggestionArray from './suggestionData'

const PHome = () => {
  return pug`
    Div.root
      Row.intro(vAlign="center")
        H3.title BARE IT!
      Div.wrapper
        Div.main
          SuggestionForm.form
          SuggestionBar
          each suggestion, index in suggestionArray
            SuggestionView(key=index index=index ...suggestion)
        EventSidebar.eventBar
  `
}

export default PHome
