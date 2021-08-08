import React from 'react';
import "./SidebarOption.css"

const SidebarOption = ({Icon,title,number,selected}) => {
    return (
        <div>
             <div className={`sidebarOption ${selected && 'sidebarOption--active'} `}> 
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
        </div>
    )
}

export default SidebarOption
