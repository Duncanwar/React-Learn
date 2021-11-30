import React from 'react';

const useDeviceDetect = () => {
const [isMobile,setMobile] = React.useState(false);
    React.useEffect(() => {
        console.log(`user's device is:${window.navigator.userAgent}`);
        const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent
        const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPod/i))
        setMobile(mobile)
    },[])
   return {isMobile}
};

export default useDeviceDetect;