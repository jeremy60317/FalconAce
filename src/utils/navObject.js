import home_w from '../static/home_white.svg'
import global_w from '../static/global_white.svg'
import business_w from '../static/business_white.svg'
import sport_w from '../static/sport_white.svg'
import technology_w from '../static/technology_white.svg'
import entertainment_w from '../static/entertainment_white.svg'
import home_b from '../static/home_black.svg'
import global_b from '../static/global_black.svg'
import business_b from '../static/business_black.svg'
import sport_b from '../static/sport_black.svg'
import technology_b from '../static/technology_black.svg'
import entertainment_b from '../static/entertainment_black.svg'

const navObj = {
  home: { urlTo: '', title: '熱門報導', svg_b: home_b, svg_w: home_w },
  global: { urlTo: 'global', title: '全球', svg_b: global_b, svg_w: global_w },
  business: {
    urlTo: 'business',
    title: '商業',
    svg_b: business_b,
    svg_w: business_w,
  },
  entertainment: {
    urlTo: 'entertainment',
    title: '娛樂',
    svg_b: entertainment_b,
    svg_w: entertainment_w,
  },
  sport: { urlTo: 'sport', title: '運動', svg_b: sport_b, svg_w: sport_w },
  technology: {
    urlTo: 'technology',
    title: '科技',
    svg_b: technology_b,
    svg_w: technology_w,
  },
}
export default navObj
