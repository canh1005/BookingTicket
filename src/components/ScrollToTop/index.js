import React, { useEffect, useState } from "react";
import {scrollTopStyle} from './../../material-ui/style'
import VerticalAlignTopOutlinedIcon from '@material-ui/icons/VerticalAlignTopOutlined';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTopStyle = scrollTopStyle();
    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={scrollToTopStyle.root}>
            {isVisible &&
                <div onClick={scrollToTop}>
                    <VerticalAlignTopOutlinedIcon className={scrollToTopStyle.icon}/>
                </div>}
        </div>
    );
}