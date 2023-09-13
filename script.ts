
class Cabecalho extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
    
        <input type="text" placeholder="Digite aqui..." name="text" class="input">
        <a href="criar.html" target="_blank" rel="noopener noreferrer">  
        <button><img src="./criar-removebg-preview.png" alt=""></button></a>
        `
        this.id = `cabecalho`



    }
}

customElements.define('nova-pag', Cabecalho)