import React from 'react'
import {
        FaFacebook,
        FaTwitter,
        FaInstagram,
        FaLinkedin} from "react-icons/fa";
        import {
            FooterContainer,
            FooterWrap,
            SocialMedia,
            SocialMediaWrap,
            SocialLogo,
            SocialIcons,
            SocialIconLink
        } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                        <SocialIconLink href="//www.instagram.com/kemo_jd/" target="_blank" aria_label="Instagram" rel="noopener noreferrer">
                                    <FaInstagram/>   
                                </SocialIconLink>
                                <SocialIconLink href="//www.facebook.com/kameljamaldawod/" target="_blank" aria_label="Facebook" rel="noopener noreferrer">
                                    <FaFacebook/>   
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com/in/kameldawoud" target="_blank" aria_label="Linkedin" rel="noopener noreferrer">
                                    <FaLinkedin/>   
                                </SocialIconLink>
                                <SocialIconLink href="//twitter.com/kemo_jd" target="_blank" aria_label="Twitter" rel="noopener noreferrer">
                                    <FaTwitter/>   
                                </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
