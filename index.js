let menuAfficher = false

// Montrer ou oculter le menu
function afficherMasquerMenu() {
  if (menuAfficher) {
    document.getElementById('nav').classList = ''
    menuAfficher = false
  } else {
    document.getElementById('nav').classList = 'responsive'
    menuAfficher = true
  }
}

function selectioner() {
  // Masque le menu une fois que j'ai sélectionné une option
  document.getElementById('nav').classList = ""
  menuAfficher = true
}

// Fonction qui s'applique à l'animation des compétences
/* function effetCompetances() {
  var competances = document.getElementById('competances')

  // innerHeight = retourne la hauteur interne de la zone de contenu d'une fenêtre du navigateur
  var distanceCompetances = window.innerHeight - competances.getBoundingClientRect().top

  if (distanceCompetances >= 300) {
    let skills = document.getElementsByClassName('progres')
    skills[0].classList.add('html-css')
    skills[1].classList.add('javascript')
    skills[2].classList.add('react')
    skills[3].classList.add('photoshop')
    skills[4].classList.add('lightroo,')
    skills[5].classList.add('ilustrator')
    skills[6].classList.add('comunication')
    skills[7].classList.add('travaille-equipe')
    skills[8].classList.add('dedicatiom')
    skills[9].classList.add('ventes')
    
  }

  // Détection du scroll pour appliquer l'animation sur la barre de compétences
  window.onscroll = function () {
    effetCompetances()
  }

} */