function Header(){
    return(
        <div>
            <div className="header">  <div className="logo">
               
               <div className="logo2"><img src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="logo" height="50px" width="130px"/></div>
           </div>
           <div className="search">
               <div className="search1">
                   <input type="search" name="" id="ser" placeholder="search"/>
               </div>
               <div className="search2" ><i id="lo" className="fa-solid fa-magnifying-glass"></i>
               
               </div>
           </div>
           <div className="signin">
              <div className="create">
                  <i className="fa-solid fa-video-slash"></i>
               </div>
               <div className="menu"><i className="fa-solid fa-bars"></i></div>
               <div className="bell"><i className="fa-solid fa-bell"></i></div>
               <div className="id"><i className="fa-solid fa-user"></i></div>
           </div>
           </div>
        </div>
    )
}
export default Header;