import React from 'react'



function SidebarRow({Icon,title,xpanded}) {


// const [selected, setSelected] = useState(false)

// function checkSelected(){
//   if(selected === true){
//     setSelected(false);
//   } else{
//     setSelected(true);
//   }

  // className={selected||activate ? "sidebarRow  selected":"sidebarRow"}

    return (
      <div className={xpanded?"sidebarRow_active ":"sidebarRow"}>
      <Icon className={xpanded?"icon_active":"sidebarRow__icon" }/>
      <h2 className={xpanded?'title_active':"title"}>{title}</h2>
      </div>
    )
  }

export default SidebarRow