const app = "I don't do much.";
const addInitialsToHeroes = heroes => heroes.map(hero => Object.assign({}, hero, {
  initials: hero.firstName.charAt(0) + hero.lastName.charAt(0),
}));

//^^^NICE AND PURE

//vvvvv DIRTY AND POOR
function addInitialsToHeroes(heroes) {
  heroes.forEach(hero => {
    hero.initials = hero.firstName.charAt(0) + hero.lastName.charAt(0);
  });

  return heroes;
}

let heroesWithInitials = addInitialsToHeroes(heroes);
