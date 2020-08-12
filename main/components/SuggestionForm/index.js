import React from 'react'
import { TextInput, Div, Button, H4, Span, Br } from '@startupjs/ui'
import { observer, useValue } from 'startupjs'
import './index.styl'

const SuggestionForm = () => {
  const [form, $form] = useValue({})

  const handleChange = (field) => (value) => $form.set({ ...form, [field]: value })

  return pug`
    Div.root
      H4.red ADD A SUGGESTION
      Span.subtitle.red WE LOVE TO HEAR NEW IDEAS ON HOW TO BE EVEN MORE AWESOME
      Br
      TextInput(placeholder='Title of suggestion?' value=form.title onChangeText=handleChange('title'))
      Br
      TextInput(placeholder='Make a suggestion' numberOfLines=5 value=form.description onChangeText=handleChange('description'))
      Br
      Div
        Button(shape='squared' onClick=() => console.log(form)) POST
        Br
        Div
          Span To send a private suggestion email as at:
          Span.red CULTURE@VIRGINHOTEL.COM
  `
}

export default observer(SuggestionForm)
