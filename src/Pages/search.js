export function search() {
  const html = `
    <section id="pagina">
    <div id="encabezado">
    <div id="logo"> FoodFans </div>
    <div id="configuracion"><img src="./imagenes/Setting.svg"></div> 
    </div>
    <nav>
    <ul>
    <li><a href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
    <li><a href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
    <li><a href="#/search"><img src="./imagenes/Search.svg"></a>Buscar </li>
       </ul>
  </nav>
    <div id="menu">
    <span class= "setting">Cambiar nombre</span>
    <span class= "setting" id="cerrar-sesion">Cerra sesion</span>
    </div>
    
    <div id="search-area">
            <img src="./imagenes/Searchinput.svg">  <input type="search" id="input-search" placeholder="Buscar..."> 
    </div>

    <div id="publicaciones">    
    </div>
    <nav>
        <ul>
       <li><a href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
       <li><a href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
       <li><a href="#/search"><img src="./imagenes/Search.svg"></a>Buscar</li>
       </ul>
    </nav>
    </section>
`;
  return html;
}
