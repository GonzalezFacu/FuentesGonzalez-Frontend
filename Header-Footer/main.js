//Definicion Header Para compartir en las paginas
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <div class="nav-bar">
                    <span>
                        <a href="/Home/home.html" class="logo">
                            <img src="/Header-Footer/img/logo.png" alt="">
                            <h2>Couture Insurrection</h2>
                        </a>
                    </span>
            
                    <div class="menu">
                        <ul class="nav-links">
                            <li><a href="/Home/home.html">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="/Productos/products.html">Products</a></li>
                            <li><a href="/Log-in/log-in.html">Log In</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>  
 
        `
    }
}

customElements.define(`my-header`, MyHeader)

//Definicion Footer Para compartir en las paginas
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-bar">
                <div class="footer-nav">
                    <ul class="nav-items">
                        <li><h1>Tienda</h1></li>
                        <li><a href="">Old School</a></li>
                        <li><a href="">Summer</a></li>
                        <li><a href="">Winter</a></li>
                        <li><a href="">Accesories</a></li>                    
                    </ul>
                </div>
                <div class="footer-nav">
                    <ul class="nav-items">
                        <li><h1>Ayuda</h1></li>
                        <li><a href="">Preguntas Frecuentes</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Mi Cuenta</a></li>
                        <li><a href="">Medios de Pago</a></li>                    
                    </ul>
                </div>   
            </div>
        </footer>

        `
    }
}

customElements.define(`my-footer`, MyFooter)