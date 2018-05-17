
/**
 * @author yvonnexchen
 * @date 2017-12-5
 * @desc 使用者
 */
import Nerv from 'nervjs'
import { isLocaleChinese } from '../../util'
import './user.scss'

import CpTitle from '../cp_title/cp_title'

class User extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    const isCN = isLocaleChinese.call(this)
    return (
      <div className='user'>
        <div className='grid_c1'>
          <CpTitle data={'users'} />
          <div className='user_main'>
            <div className='user_wrap'>
              <div className='user_card'>
                <a href='http://jd.com/' className='user_card_img' target='_blank' />
                {isCN && <span className='user_desc'>京东商城</span>}
              </div>
            </div>
            <div className='user_wrap'>
              <div className='user_card'>
                <a href='http://www.toplife.com/' className='user_card_img' target='_blank' />
                {isCN && <span className='user_desc'>TOPLIFE</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = User
