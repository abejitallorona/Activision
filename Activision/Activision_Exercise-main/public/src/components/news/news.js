class News extends HTMLElement {

    static get observedAttributes() {
        return ['text', 'img', 'img1', 'img2', 'img3', 'img4'];
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[propName] = newValue;
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/news/news.css">
        <section class = 'container'>
        <div>
        <h2>${this.text}</h2>
        </div>
        <div class = 'img-container'>
        <img src="${this.img}" alt="#" />
        <img src="${this.img1}" alt="#" /> 
        <img src="${this.img2}" alt="#" />
        <img src="${this.img3}" alt="#" />
        <img src="${this.img4}" alt="#" />
        </div>
        </section>`;
    }
}

customElements.define('news-logos', News);
export default News;