import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import{
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon
} from "@heroicons/react/outline"

function Footer() {
  return (
   <div className={css.cFooterWrapper}>
    <hr />

    <div className={css.cFooter}>
        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>Amazone</span>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon}/>
                    <span>111 Near Fazabad ,Islamabad i-8</span>
                    
                </span>
            {/* phone */}
            <span className={css.pngLine}>
                    <PhoneIcon className={css.icon}/>
                    <span>+92347-9485-272</span>
                    
                </span>
                {/* Email */}
                <span className={css.pngLine}>
                    <InboxIcon className={css.icon}/>
                    <span>Abidullah1030@gmail.com</span>
                    
                </span>
                
            </div>
        </div>
                 {/* Account Section */}
        <div className={css.block}>
            <div className={css.detail}>
                <span>Account</span>
                <span className={css.pngLine}>
                    <LoginIcon className={css.icon}/>
                    <span>Sign In</span>
                    
                </span>     
            </div>
        </div>
        {/* End Account Section */}
         
         {/* company section start */}
        <div className={css.block}>
            <div className={css.detail}>
                <span>Company</span>
                <span className={css.pngLine}>
                    <UserIcon className={css.icon}/>
                    <span>About Us</span>
                    
                </span>     
            </div>
        </div>
        {/* ccompany section end  */}

            {/* link section start  */}
        <div className={css.block}>
            <div className={css.detail}>
                <span>Resources</span>
                <span className={css.pngLine}>
                    <LinkIcon className={css.icon}/>
                    <span>Safety Privacy & Terms</span>
                    
                </span>     
            </div>
        </div>
        {/* end  */}
    </div>
    <div className={css.copyRight}>
        <span>Copyright @2022 by Amazon, Inc</span>
        <span>All rights reserved.</span>
    </div>


   </div>
  )
}

export default Footer