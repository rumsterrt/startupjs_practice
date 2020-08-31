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
    url: '/#valentines'
  },
  {
    name: 'V\u2764PEEPS',
    url: '/#peeps'
  },
  {
    name: 'V\u2764PREPS',
    url: '/#preps'
  },
  {
    name: 'CULTURE',
    url: '/#culture'
  },
  {
    name: 'TRIBE',
    url: '/#tribe'
  },
  {
    name: 'RESOURCES',
    url: '/#resources'
  },
  {
    name: 'V\u2764WELL',
    url: '/#well'
  }
]

const socialNetworks = [
  { icon: faFacebookF, url: '/#facebook' },
  { icon: faInstagram, url: '/#instagram' },
  { icon: faLinkedin, url: '/#linkedin' },
  { icon: faTwitter, url: '/#twitter' }
]

const MenuItem = observer(({ url, children }) => {
  const [currentUrl] = useLocal('$render.url')

  return pug`
    Button.navItem(
      active=currentUrl === url
      onPress=() => emit('url', url)
      variant='text'
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
