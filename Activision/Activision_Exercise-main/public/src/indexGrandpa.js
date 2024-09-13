import * as components from './components/indexFather.js';
import { newsCardsData } from './data/newsCardsData/newsCardsData.js';

class Container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('news-cards-container');
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/newsCards/newsCards.css">
      <navbar-component></navbar-component>
      <banner-component
        img="./src/assets/img/94f5e08d4f2ef3e70d7aa0f9fc3de5b2.jpg"
        alt="Call of Duty Black Ops 6 character"
        logo="./src/assets/img/BlackOps6_Logo_White_BO6.webp"
        description="Forced to go rogue. Hunted form Within. This is Black Ops 6."
        button00="Pre-Order Now"
        button01="Visit site"
      ></banner-component>
    
      <section class="featured-news">
        <news-logos
          text="Latest News & Articles"
          img="./src/assets/img/Rectangle 876.png"
          img1="./src/assets/img/rectangle872.png"
          img2="./src/assets/img/Rectangle 873.png"
          img3="./src/assets/img/Rectangle 874.png"
          img4="./src/assets/img/Rectangle 875.png"
        ></news-logos>
      </section>
    `;
    
    newsCardsData.forEach((e) => {
      const newsCard = document.createElement('news-cards');
      newsCard.setAttribute('image', e.image);
      newsCard.setAttribute('date', e.date);
      newsCard.setAttribute('title', e.title);
      newsCard.setAttribute('description', e.description);
      newsCard.setAttribute('more', 'READ MORE »');
      container.appendChild(newsCard);
    });
    
    const featuredNews = this.shadowRoot.querySelector('.featured-news');
    featuredNews.appendChild(container);
    
    container.innerHTML += `
            <div class="button-view-all">
                <div class="button-login">
                    <a href="index.html">VIEW ALL</a>
                </div>
            </div>
    `;
    
    this.shadowRoot.innerHTML += `
            <support-banner
            title="We're here to help!"
            description='Get answers to frequently asked questions, check server status, and engage with a support expert'
            image='./src/assets/img/Screenshot 2024-09-02 175049.png'>
            </support-banner>

<link rel="stylesheet" href="./src/components/community/community.css">
<section class="shadow-container">     
  <h1 class="title-community">Community</h1>   
  <div class="shadow-card-container">
    <community-component
      picture="./src/assets/img/457612352_1279991166711562_2135084959069529567_n.jpg"
      username="callofdutyendowment"
      icon="./src/assets/img/toppng.com-white-instagram-icon-instagram-logo-instagram-instagram-icon-white-306x304.png"
    ></community-component>

    <community-component
      picture="./src/assets/img/457024224_743870651167307_7401446175988037682_n.jpg"
      username="callofdutyendowment"
      icon="./src/assets/img/toppng.com-white-instagram-icon-instagram-logo-instagram-instagram-icon-white-306x304.png"
    ></community-component>

    <community-component
      picture="./src/assets/img/457632007_18078057127523543_4908097477892020968_n.jpg"
      username="callofdutyendowment"
      icon="./src/assets/img/toppng.com-white-instagram-icon-instagram-logo-instagram-instagram-icon-white-306x304.png"
    ></community-component>
  </div>
</section>

<havefun-component
    h2="Have Fun"
    description="Learn more about job opportunities"
    teams="OUR TEAMS"
    li00="Game Design"
    li01="Art & Animation"
    li02="Brand Management"
    li03="Production"
    li04="Quality Assurance"
    li05="Customer Support"
    li06="Studio Operations"
    li07="Programming"
    li08="Finance & Accounting"
    li09="Human Resources"
></havefun-component>
    `
  }
}

customElements.define('app-container', Container);