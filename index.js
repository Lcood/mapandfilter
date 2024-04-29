const article = [
  {
    id: 1,
    title: "L'art de nouer ses lacets",
    category: 'tips',
    duration: 3,
    img: './images/item-1.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 2,
    title: 'Raconter sa journée',
    category: 'tips',
    duration: 5,
    img: './images/item-2.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 3,
    title: 'Faut il complimenter ou encourager son enfant',
    category: 'tips',
    duration: 4,
    img: './images/item-3.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 4,
    title: 'Puzzle des émotions',
    category: 'activities',
    duration: 2,
    img: './images/item-4.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed? Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 5,
    title: 'La communication ouverte',
    category: 'activities',
    duration: 3,
    img: './images/item-5.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 6,
    title: 'Gaston la licorne',
    category: 'lecture',
    duration: 3,
    img: './images/item-6.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 7,
    title: 'Petit ours est fier',
    category: 'lecture',
    duration: 2,
    img: './images/item-7.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 8,
    title: 'Les rôles modèles',
    category: 'lecture',
    duration: 4,
    img: './images/item-8.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 9,
    title: 'Jeux de rôle',
    category: 'activities',
    duration: 4,
    img: './images/item-9.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 10,
    title: 'Stimuler la pensée métacognitive',
    category: 'tips',
    duration: 4,
    img: './images/item-10.jpg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
];

const sectionCenter = document.querySelector('.section-center');
const containerBtn = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
  getArticles(article);
  displayBtns();
});

function getArticles(singleArticle) {
  let displayArticle = singleArticle.map((item) => {
    return `<article class="article-item">
          <img src="${item.img}" alt="article-item" class="photo" />
          <div class="article-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="duration">${item.duration} minutes</h4>
            </header>
            <p class="article-text">
              ${item.desc}
            </p>
            <button class="btn">Lire la suite</button>
          </div>
        </article>`;
  });
  displayArticle = displayArticle.join(' ');
  sectionCenter.innerHTML = displayArticle;
}

function displayBtns() {
  // filtrer de manière dynamique les boutons, si changement de donnée aucune répercution sur le menu = > boutons uniques
  const categories = article.reduce(
    (values, item) => {
      // si values n'inclue pas item.category
      if (!values.includes(item.category)) {
        // alors ajoute la categorie au tableau
        values.push(item.category);
      }
      // si l'élement est deja présent alors retourne moi le tableau de categorie existant
      return values;
    },
    ['Nos articles']
  );
  const categoryBtn = categories
    .map(() => {
      return `<button class="filter-btn" data-id=${category}>${category}</button>`;
    })
    .join('');
  containerBtn.innerHTML = categoryBtn;
  // après ajoue dynamique des boutons, puis on peut les selectionner, et pas avant sinon on ne peut y accèder
  btnFilter = document.querySelectorAll('.filter-btn');

  btnFilter.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const currentBtn = e.currentTarget.dataset.id;
      const articleCategory = article.filter((menuArticle) => {
        if (menuArticle.category === currentBtn) return menuArticle;
      });
      if (currentBtn === 'articles') {
        return getArticles(article);
      } else {
        return getArticles(articleCategory);
      }
    });
  });
}
