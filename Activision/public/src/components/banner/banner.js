class Banner extends HTMLElement {

    static get observedAttributes(){
        return ['img', 'alt', 'logo', 'description', 'button00', 'button01'];
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
            this[propName] = newValue;
        }
    }
    render(){
        this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./src/components/banner/banner.css">
<section>
    <div class='hero-img'>
        <img src="${this.img}" alt="${this.alt}" />
        <div class='logo-buttons-container'>
            <div class='logo-img'>
                <img src="${this.logo}" alt="${this.alt}" />
                <p>${this.description}</p>
            </div>
            <div class="button">
                <div class="button-register">
                    <a href="index.html">${this.button00}</a>
                </div>
                <div class="button-login">
                    <a href="index.html">${this.button01}</a>
                </div>
            </div>
        </div>
    </div>
</section>
        `;
    }
}
customElements.define('banner-component', Banner);
export default Banner;