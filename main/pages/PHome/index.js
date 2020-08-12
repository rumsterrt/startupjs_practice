import React from 'react'
import { ScrollView } from 'react-native'
import './index.styl'
import { Content, Row, H3 } from '@startupjs/ui'
import SuggestionForm from 'main/components/SuggestionForm'
import SuggestionView from 'main/components/SuggestionView'

import suggestionArray from './suggestionData'

const PHome = () => {
  return pug`
    ScrollView.root
      Content
        Row.intro(vAlign="center")
          H3.white BARE IT
        SuggestionForm
        each suggestion, index in suggestionArray
          SuggestionView(key=index index=index ...suggestion)
  `
}

export default PHome
