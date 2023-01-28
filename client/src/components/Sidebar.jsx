import React from 'react'
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaTh, 
  FaThList, 
  FaUserAlt,

} from "react-icons/fa"


const Sidebar = () => {
  
  const menuItem = [
    {
      path: "/",
      name: "Login",
      icon: <FaTh/>
      
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <FaUserAlt/>
      
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar/>
      
    },
    {
      path: "/comentarios",
      name: "Comentarios",
      icon: <FaCommentAlt/>
      
    },
    {
      path: "/produtos",
      name: "Produtos",
      icon: <FaShoppingBag/>
      
    },
    {
      path: "/produtosLista",
      name: "Lista de Produtos",
      icon: <FaThList/>
      
    },
  ]


  return (
    <div className='container'>
        <div className="sidebar">
          <div className="top_section">
            <h1 className="logo">Logo</h1>
            <div className="bars">
              <FaBars/>

            </div>

          </div>

        </div>
    </div>
  )
}

export default Sidebar;