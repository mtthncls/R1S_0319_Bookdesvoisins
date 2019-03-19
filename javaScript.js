// Carousel modal
const closeModalElem = document.getElementById("modal")
const clickableElem = document.getElementById("carouselQuartierLibre");

const displayModal = () => {
  const hiddenModalElem = document.getElementById("modal");
  hiddenModalElem.style.display = "block";
}

const closeModal = () => {
  const closeModalElem = document.getElementById("modal");
  closeModalElem.style.display = 'none';
}

clickableElem.addEventListener("click", () => {
  displayModal();
});


closeModalElem.addEventListener('click', () => {
  closeModal();
})
//Array adressses

const adress = [{
  name: 'Quartiers Généraux',
  street: '6 Rue de Saint-Brice',
  city: '51100 Reims'
},
{
  name: 'La Petite Halle',
  street: '53 Rue Vernouillet',
  city: '51100 Reims'
}
]

document.addEventListener("DOMContentLoaded", () => {
  location1Elem = document.getElementById("location");
  let adressCount = "";
  for (let i = 0; i < adress.length; i++) {
    adressCount += `<div> 
  <h6 style="text-decoration: underline"><B>${adress[i].name}</B></h6>
  <p>${adress[i].street}<br>${adress[i].city}</p>
</div>`
  }
  location1Elem.innerHTML = adressCount;
});

const resids = [{
  name: "Faucheux Virgine",
  presentation: "Pour la société Le Bloc j'occupe les fonctions d'Office Manager, en d'autres termes l’administratif et la comptabilité. Sur le projet Quartier Libre, j'ai en charge l'animation de la vie communautaire et la gestion des bâtiments, donc le bien-être des Résidents",
  picture: "https://quartierlibre.co/sites/default/files/styles/large/public/upload/Le%20Bloc_Virginie%20FAUCHEUX.jpg?itok=2_PVa9vb",
  personnalLink: "https://www.linkedin.com/in/virginie-faucheux-ab068a136/",
  corporation: "Le Bloc",
  corporationPicture: "https://quartierlibre.co/sites/default/files/upload/img20_0.png",
  corporationPresentation: "La société Le Bloc a pour objectif de développer des solutions éphémères et pérennes, visant la valorisation de l’innovation, la création et l’entrepreneuriat sur notre territoire.Elle apporte, entre autre, le projet multidimensionnel dénommé Quartier Libre.",
  corporationLink: "https://quartierlibre.co/le-bloc"
},
{
  name: "Gignon Jérémy",
  presentation: "Développeur backend / Mainteneur de l'infrastructure. Amateur de sports mécaniques et de technologie en général.",
  picture: "https://landing.adback.co/wp-content/uploads/2017/09/jeremy_gignon_1.jpg",
  personnalLink: "https://www.linkedin.com/in/jeremygignon/",
  corporation: "AdBack",
  corporationPicture: "data:image/png;base64,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",
  corporationPresentation: "AdBack est une entreprise dans le secteur de la publicité en ligne dont le but est d'offrir des statistiques concernant l'audience des utilisateurs adblockers et offrir des solutions de remonétisation de cette audience.",
  corporationLink: "https://landing.adback.co/"
},
{
  name: "Costa Nathalie",
  presentation: "Pragmatique et ouverte d’esprit, elle aime découvrir, s’enrichir et rencontrer de nouvelles personnes.",
  picture: "https://quartierlibre.co/sites/default/files/styles/large/public/upload/NC%20COMMUNICATIONS_Nathalie%20COSTA.jpeg?itok=KbEpg3YW",
  personnalLink: "https://www.linkedin.com/in/nathalie-costa-87162b3a/",
  corporation: "NC Communication's",
  corporationPicture: "https://quartierlibre.co/sites/default/files/upload/GABARIT_NC%20Communication.png",
  corporationPresentation: "En tant que free-lance, elle assure des prestations de rédaction de contenus pour tout support de communication (articles, contenus de sites ou de plaquettes). Les relations presse constituent le cœur de son activité. Elle conçoit et met en oeuvre des stratégies RP grâce à des supports dédiés et un fichier qualifié de journalistes.",
  corporationLink: "http://nathaliecosta.com/"
},
{
  name: "Mairesse Amélie",
  presentation: "Stagiaire en marketing et communication, geek",
  picture: "data:image/jpeg;base64,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",
  personnalLink: "https://www.linkedin.com/in/am%C3%A9lie-mairesse-86b161131/",
  corporation: "5euros",
  corporationPicture: "https://5euros.com/built/img/logo-5euros.svg",
  corporationPresentation: "Plateforme collaborative de microservices en ligne",
  corporationLink: "https://5euros.com/"
},
{
  name: "Bechetoille Clément",
  presentation: "Campus Manager de la Wild Code School Reims, passionné d'innovation et d'éducation",
  picture: "https://quartierlibre.co/sites/default/files/styles/large/public/upload/Wild%20Code%20School_Cle%CC%81ment%20BECHETOILLE.jpg?itok=jFFSpMhx",
  personnalLink: "https://www.linkedin.com/in/clementbechetoille/",
  corporation: "Wild Code School",
  corporationPicture: "https://wildcodeschool.fr/wp-content/uploads/2019/01/logo_pink_176x60.png",
  corporationPresentation: "La Wild Code School est un réseau de 17 écoles (dont 13 en France) nouvelle génération qui proposent des formations intensives au métiers du numérique. ",
  corporationLink: "https://wildcodeschool.fr/"
},
{
  name: "Hubert Mickael",
  presentation: "Je suis responsable de l’infrastructure de téléphonie (VoIP) d'Allo-Media. Mon travail s'approche plus du *ops* de devops.",
  picture: "https://media.licdn.com/dms/image/C5603AQGhQXu2UwJ7RQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=_UwC7VgTIY34HaEUyZdLcoBQAORgyOnqqnf5C-JjWuI",
  personnalLink: "https://www.linkedin.com/in/sipengineer/",
  corporation: "Allo-Media",
  corporationPicture: "https://www.allo-media.fr/assets/img/vitrine/logo.png",
  corporationPresentation: "Allo-Media est une startup Parisienne qui travaille dans l'intelligence artificielle autour de la reconnaissance vocale à partir de la téléphonie.",
  corporationLink: "https://www.allo-media.fr/"
}
]

document.addEventListener("DOMContentLoaded", () => {
  residsListElem = document.getElementById("residsList");

  let peoplesCount = "";
  for (let i = 0; i < resids.length; i++) {
    peoplesCount += `<article class="container rounded-sm mt-4 cyanBorder">
  <div class="row">
    <div class="container position-relative mrBox">
      <div class="row col-sm-12" style="background-color: white; height: 2rem; width: 8rem;">
        <header>Nos résidents</header>
      </div>
    </div>
    <div class="card mb-3 col-sm-9" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src=${resids[i].picture} class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title police">${resids[i].name}</h5>
            <p class="card-text">${resids[i].presentation}</p>
            <p class="card-text"><a href="${resids[i].personnalLink}"><img src="https://zupimages.net/up/19/12/bzal.png" alt="" /></a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 d-none d-lg-block col-5" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src=${resids[i].corporationPicture} class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title police">${resids[i].corporation}</h5>
            <p class="card-text">${resids[i].corporationPresentation}</p>
            <p class="card-text"><a href="${resids[i].corporationLink}">${resids[i].corporationLink}</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row col-sm-8">
      <p>
        <a class="btn btn-light col-12 d-lg-none" data-toggle="collapse" href="#collapse${i}" role="button"
          aria-expanded="false" aria-controls="collapse${i}">
          Plus d'informations
        </a>
      </p>
    </div>
    <div class="collapse" id="collapse${i}">
      <div class="card mb-3 col-6" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src=${resids[i].corporationPicture} class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title police">${resids[i].corporation}</h5>
              <p class="card-text">${resids[i].corporationPresentation}</p>
              <p class="card-text"><a href="${resids[i].corporationLink}">${resids[i].corporationLink}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>`
  }
  residsListElem.innerHTML = peoplesCount;
  console.log(residsListElem);
});
