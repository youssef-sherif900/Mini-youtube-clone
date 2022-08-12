import React from 'react'
import "../css/Sidebar.css"
import SidebarRow from "./SidebarRow.js"



import {sidebarData,sidebarData2} from '../Data/sidebarData.js';



function Sidebar(props) {

  function createSidebar(SidebarRowData){

    return(
      <SidebarRow xpanded={props.xpanded}
      key={SidebarRowData.id}
      activate={SidebarRowData.selected}
      Icon={SidebarRowData.Icon} 
      title={SidebarRowData.title}
      />
    )
  }

  return (
    <div className={props.xpanded?"sidebar active":'sidebar'}>
          {sidebarData.map(createSidebar)}
       <hr/>
          {sidebarData2.map(createSidebar)}
       <hr/>
    </div>
  )
}


export default Sidebar