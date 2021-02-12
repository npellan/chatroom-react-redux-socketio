# Chatroom avec React, Redux, Express et Socket.io

Une application de chat codé en React avec Redux, connectée à un server Express et Socket.io.
Projet réalisé lors de ma formation Fullstack Javascript au sein de l'école O'clock.

## Lancer le projet

Télécharger ou cloner le repos.

### Prérequis

* Avoir installé Node sur sa machine (voir [la doc](https://nodejs.org/en/docs/) pour un guide d'installation complet).
* Avoir installé Yarn sur sa machine (voir [la doc](https://yarnpkg.com/getting-started/install) pour un guide d'installation complet).

### Installer le projet

#### Backend

Naviguer dans le dossier backend puis Lancer la commande yarn pour installer les dépendances nécessaires au fonctionnement du projet.

```
yarn
```

Puis lancer la commande yarn start pour lancer le projet

```
yarn start
```

Le serveur se lance sur le port 3001.

##### Routes

- `POST http://localhost:3001/login`

=> fournir un objet contenant email et password, avec ces identifiants

```
{
    email: 'luke@starwars.io',
    password: 'skywalker'
}
```

#### Frontend

Naviguer dans le dossier frontend puis Lancer la commande yarn pour installer les dépendances nécessaires au fonctionnement du projet.
```
yarn
```

Puis lancer la commande yarn start pour lancer le projet

```
yarn start
```

Le serveur se lance sur le port 8080.

## Naviguer dans l'application

Commencez par vous logger grâce à la modale de connexion pré-remplie.
Vous rentrerez dans la peau de Luke Skywalker et pourrez ainsi dialoguer avec votre père, Dark Vador :wink: :mega:

## Codé avec

* SCSS
* React
* Redux
* Express
* Socket.io

## Auteur

* **Nicolas PELLAN** - *Initial work* - [npellan](https://github.com/npellan)

## Remerciements

Merci à Sébastien, mon professeur React lors de ma formation au sein de l'école O'Clock.

## License

This project is licensed under the MIT License.
