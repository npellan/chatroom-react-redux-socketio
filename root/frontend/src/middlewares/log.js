/* eslint-disable max-len */
/*
    Un middleware est une fonction qu'on va donner au store
    Le store s'en servira pour traduire des actions vers des effets (autre qu'une modification de state, pour ça il y a le reducer) par ex : du debug, des requetes ajax, des timers, ...
    L'objet action passera tour à tour dans chaque middleware puis arrivera enfin dans le reducer
    Dans un middleware on a accès à:
    - store : et à ses méthodes getState (lecture du state) et dispatch (émission d'intention)
    - next : la fonction qui dit explicitement si on laisse passer ou non une action, si on n'appelle pas next(action) dans le middleware l'action n'arrive pas au middleware/reducer suivant, si on l'appelle l'action passe au middleware/reducer suivant
    - action : l'objet action, l'intention qu'on a intercepté et qu'on va potentiellement traduire
*/
// Middleware de log, son but c'est juste de faire un console.log
// de l'action, une fois son job terminé, il passe le message à son voisin
export default (store) => (next) => (action) => {
  const { type, ...payload } = action;
  console.log(type, payload);
  // On passe à son voisin
  next(action);
};
