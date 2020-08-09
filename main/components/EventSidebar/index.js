import React from 'react'
import './index.styl'
import { Div, Row, H6, H3, Span, Button } from '@startupjs/ui'
import { Image } from 'react-native'
import { BASE_URL } from '@env'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import data from './data'

const base = BASE_URL

const EventSidebar = () => {
  return pug`
    Div.root
      Div.subContainer.first
        H6.red TEAMMATE
        H3.title.red EVENTS
        Div.split
        each event, index in data.teammate
          Row.eventCard(key=index)(styleName=[{first: index === 0}])
            Div.date
              Span.red #{event.date.weekday}
              Span.red #{event.date.month}
              Span.red.bold #{event.date.number}
            Div.info
              Span.red.bold #{event.name}
              Span.gray #{event.place}
              Span.gray #{event.time}
            Button(color='#D80514' icon=faChevronDown variant='text' size='l')
      Div.subContainer
        H6.red HOTEL
        H3.title.red EVENTS
        Div.split
        each event, index in data.hotel
          Row.eventCard(key=index)(styleName=[{first: index === 0}])
            Image.hotelImage(source={uri:base + event.img} resizeMode="contain")
            Div.info
              Span.red.bold #{event.name}
              Span.gray #{event.place}
              Span.gray #{event.date}
      
  `
}

export default EventSidebar
