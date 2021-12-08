import React, { useState } from 'react';
import { BiLogInCircle, BiInfoCircle, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";


const defaultSize = 36;

export function SideBar() {
    const [isCollapsed, setCollapsed] = useState(false);
    const handleCollapse = () => (isCollapsed ? setCollapsed(false) : setCollapsed(true));

    return (
        <div>
            <div className="fixed top-0 left-0 h-screen w-16 m-0 
                            flex flex-col 
                            bg-primary_dark text-white">
                {isCollapsed ?
                    <>
                        <></>
                        <Icon icon={<BiLogInCircle size={defaultSize} />} />
                        <Icon icon={<BiInfoCircle size={defaultSize} />} />
                        <Icon icon={<BiArrowFromLeft size={defaultSize} onClick={(handleCollapse)} />} isLast={true} />
                    </>
                    :
                    <Icon icon={<BiArrowFromRight size={defaultSize} onClick={(handleCollapse)} />} isLast={true} />
                }
            </div>
            <div className={`fixed top-0 left-16 h-screen m-0 overflow-hidden ${isCollapsed ? "w-0" : "w-60"}
                            flex flex-col
                            bg-primary text-white transition-all`}>
                <Icon icon={<p size={defaultSize}>Log in</p>} isLong={true} />
                <Icon icon={<p size={defaultSize}>More info</p>} isLong={true} />
            </div>
        </div>
    )
}


const Icon = ({ icon, isLast = false, isLong = false }) => {
    let classString = "sidebar-icon";
    if (isLast) {
        classString += " mt-auto";
    }
    if (isLong) {
        classString += " w-48 bg-primary_light"
    }
    return (
        <div className={classString}>
            {icon}
        </div>
    )
};