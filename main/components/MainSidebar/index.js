import React from 'react'
import { observer, emit, useLocal } from 'startupjs'
import './index.styl'
import { Menu, Div, Row, Button, Span } from '@startupjs/ui'
import { Image } from 'react-native'
import { BASE_URL } from '@env'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const base = BASE_URL

const menuItems = [
  {
    name: 'VALENTINES',
    url: '/'
  },
  {
    name: 'V\u2764PEEPS',
    url: '/'
  },
  {
    name: 'V\u2764PREPS',
    url: '/'
  },
  {
    name: 'CULTURE',
    url: '/'
  },
  {
    name: 'TRIBE',
    url: '/'
  },
  {
    name: 'RESOURCES',
    url: '/'
  },
  {
    name: 'V\u2764WELL',
    url: '/'
  }
]

const socialNetworks = [
  { icon: faFacebookF, url: '/' },
  { icon: faInstagram, url: '/' },
  { icon: faLinkedin, url: '/' },
  { icon: faTwitter, url: '/' }
]

const MenuItem = observer(({ url, children }) => {
  const [currentUrl] = useLocal('$render.url')
  console.log('currentUrl', currentUrl)
  return pug`
    Span.navItem(
      active=currentUrl === url
      onPress=() => emit('url', url)
    )= children
  `
})

const MainSidebar = ({ style }) => {
  return pug`
    Div.root(style=style)
      Image.logo(source={uri:base + '/img/main-logo-white.png'} resizeMode="contain")
      Menu.nav
        each item, index in menuItems
          MenuItem(key=item.name url=item.url styleName=[{first: index === 0}]) #{item.name}
      Row.socialContainer(align='between')
        each item, index in socialNetworks
          Button.social(key=index icon=item.icon size='m' onPress=() => emit('url', item.url) shape='circle' iconColor='red' styleName=[{first: index === 0}])
  `
}

export default MainSidebar
