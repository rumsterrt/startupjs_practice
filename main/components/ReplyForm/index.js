import React from 'react'
import { TextInput, Row, Icon } from '@startupjs/ui'
import { observer, useValue } from 'startupjs'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import './index.styl'

const ReplyForm = () => {
  const [form, $form] = useValue({})

  const handleChange = (field) => (value) => $form.set({ ...form, [field]: value })

  return pug`
    Row.root
      Icon(icon=faSmile size='xl')
      TextInput.input(placeholder='Reply to this suggestion...' value=form.message onChangeText=handleChange('message'))
      
  `
}

export default observer(ReplyForm)
