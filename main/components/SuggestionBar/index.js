import React, { useState } from 'react'
import { Button, Row, Div } from '@startupjs/ui'
import { observer } from 'startupjs'
import './index.styl'

const items = ['ALL', 'MOST LOVED', 'IN ACTION', 'ARCHIVE']

const SuggestionBar = ({ title, description, votes, author, date, replies, index }) => {
  const [picked, setPicked] = useState(items[0])
  console.log('picked', picked)
  return pug`
    Row.root
      each item, index in items
        Div.buttonContainer(key=index)
          Button(onPress=() => setPicked(item) variant='text' textColor='#D11B1E') #{item}
          Div.arrow(styleName=[{active: picked === item}])
  `
}

export default observer(SuggestionBar)
