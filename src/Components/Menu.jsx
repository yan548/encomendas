const Menu = () => (

   <div>
      <nav className="navbar">
         <div className="max-width">
            <div className="logo">
               <a href="/">Correios</a>
            </div>
            <ul className="menu">
               <li><a href="/" className="menu-btn">Home</a></li>
               <li><a href="#rastrear" className="menu-btn">Rastrear</a></li>
               <li><a href="#consultacep" className="menu-btn">Consultar CEP</a></li>
               <li><a href="#calcularenvio" className="menu-btn">Calcular Envio</a></li>
            </ul>
            <div className="menu-btn">
               <i class="fa-solid fa-bars"></i>
            </div>

         </div>
      </nav>
   </div>
);

export default Menu;