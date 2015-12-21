# Organisation du workspace
Les projets vont rapidement grossir et il est important dès le début de bien séparer chaque composant (SoC, vous vous rappellez ?). Voici une suggestion d'organisation
[Projet]
- [js] : dossier contenant les fichiers js
- [css] : dossier contenant les fichiers css
- index.html : dans ce projet, un seul fichier html, donc on peut le laisser à la racine du projet


# Commentaires
Ne soyez pas avares en commentaire ! Sur le Css, le Js ou le Html : commentez, commentez et commentez encore. 
Par exemple, dans le app.js, juste avant le code qui contrôle les boutons liés au "tableau de bord", un petit commentaire qui permet de bien marquer la différence : 
/*
	Fonctions des boutons liés au dashboard :
	- show all
	- show only active
	- show only completed
	- clear completed
*/
[... les fonctions ...]


# Décomposer chaque étape en sous-étapes
## Gagner en lisibilité
## Améliorer la maintenabilité
Une ligne doit MAXIMUM être de 80 caractères !
Donc au lieu d'enchaîner les mega-instructions : 

$('.applicationToDoList').append('<div class="item"><input type="checkbox" name="elementsliste" id="checkboxID"/><button class="close">X</button>' + aAjouter + '</div>');

Décomposer : 
- créer une nouvelle variable qui va contenir le nouvel élément
- aller à la ligne pour rendre le tout digeste
- utiliser cette nouvelle variable

De cette manière, si vous devez modifier un attribut, c'est beaucoup plus accessible.

var newElmt = '<div class="item">' 
	+ '<input type="checkbox" name="elementsliste" id="checkboxID"/>'
	+ '<button class="close">X</button>' + aAjouter + '</div>');

$('.applicationToDoList').append(newElmt);

# Indentation
Indenter, c'est comme les commentaires : ca aide à structurer le code et ca rend le code digeste,
et agréable à lire.
Même sur les balises de base :
<html>
	<head>
		...
	</head>
	<body>
		<p>
			...
		</p>
	</body>
</html>

