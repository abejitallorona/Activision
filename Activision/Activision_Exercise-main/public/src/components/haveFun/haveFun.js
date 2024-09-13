class HaveFun extends HTMLElement {
    static get observedAttributes() {
        return ['h2', 'description', 'teams', 'li00', 'li01', 'li02', 'li03', 'li04', 'li05', 'li06', 'li07', 'li08', 'li09']
    }

    constructor() {
        super()
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./src/components/haveFun/haveFun.css"> 
<section class="have-fun">
    <div class="have-fun__container__left">
        <h2>${this.h2}</h2>
        <p>${this.description}</p>
            <div class="button-view-all">
                <div class="button-login">
                    <a href="index.html">JOIN US</a>
                </div>
            </div>
    </div>
    <div class="have-fun__container__right">
        <h3>${this.teams}</h3>    
        <ul>
            <li>${this.li00}</li>
            <li>${this.li01}</li>
            <li>${this.li02}</li>
            <li>${this.li03}</li>
            <li>${this.li04}</li>
            <li>${this.li05}</li>
            <li>${this.li06}</li>
            <li>${this.li07}</li>
            <li>${this.li08}</li>
            <li>${this.li09}</li>
        </ul>
    </div>
</section>
        `
    }
}

customElements.define('havefun-component', HaveFun)
export default HaveFun