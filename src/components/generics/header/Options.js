import './Options.scss';
import {_EMAIL, _NOTI} from '../../files/icons/icons'

const Options = () => {
    return (
        <div className='header-options'>
        <span className='email-icon'>{_EMAIL}</span>    
        <span className='email-noti'>{_NOTI}</span>
        <span className='profile-pic'></span>

        </div>
    )
}

export default Options
