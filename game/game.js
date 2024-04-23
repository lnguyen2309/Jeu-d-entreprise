const cube = document.getElementById('cube');
    var n = 0; // Initialisez n à 0
    const questions = [
    {
        question: "Selon toi, depuis ces 30 dernières années, la pollution de l’air a… ?",
        options: ["Augmenté", "Est restée constante", "Diminué"],
        answer: "Diminué"
    },
    {
        question: "Nous sommes plus protégés de la pollution à l’intérieur qu’à l’extérieur.",
        options: ["Vrai", "Faux"],
        answer: "Faux",
		details:"Nous passons plus de 80% de notre temps dans des endroits clos et contrairement à ce que l’on pense, l’air intérieur est pollué tout comme l’air extérieur, voir plus !Il est ainsi recommandé d’aérer les pièces de son appartement/sa maison tous les jours au moins 10 à 15 minutes, de préférence matin et soir, en dehors des heures de trafic, été comme hiver."
    },
	{
	    question:"Quel est l'intérêt de la couche d'ozone ?",
		options:["Elle est responsable de la couleur du ciel","Elle diminue l'effet de serre","Elle protège la terre des UV"],
		answer:"Elle protège la terre des UV"
	},
	{
        question: "Qu'est-ce que l'effet de serre ?",
        options: ["Le CO2", "L'absorption des rayons infrarouges réfléchis par la Terre", "L'effet de la couche d'ozone","L'effet du trou de la couche d'ozone"],
        answer: "L'absorption des rayons infrarouges réfléchis par la Terre"
    },
    {
        question: "Qu'est-ce qui pollue le plus ?",
        options: ["Faire tourner le lave-vaisselle sur une année", "Regarder Netflix pendant deux heures une fois par semaine pendant un an"],
        answer: "Regarder Netflix pendant deux heures une fois par semaine pendant un an",
		details:"43 kgCO2 pour le premierchoix, le 2ème 57.90 kgCO2 Cette valeur comprend la construction du téléviseur, l’utilisation des appareils en Wifi, la transmission de la donnée et la construction et l’usage des datacenters."
    },
	{
	    question:"Qu'est-ce qui pollue le plus ?",
		options:["Faire deux allers-retours Brest-Paris en voiture","Manger de la viande rouge deux fois par semaine pendant un an"],
		answer:"Manger de la viande rouge deux fois par semaine pendant un an",
		details:"Les bœufs sont des ruminants. Leur digestion produit (sous forme de rots essentiellement) énormément de méthane, un gaz à effet de serre très puissant (25 fois plus réchauffant que le CO2). De plus, l’élevage de bœuf requiert énormément d’espace pour faire pâturer les animaux mais aussi pour produire leur alimentation."
	},
	{
        question: "Quelle est le temps de décomposition d'une bouteille en plastique ?",
        options: ["AEntre 5 et 10 ans", "Entre 10 et 100 ans", "Entre 100 et 1000 ans"],
        answer: "Entre 100 et 1000 ans",
		details:"Quand un morceau de plastique tombe par terre, il met tellement de temps à se décomposer qu'il n'aura pas disparu quand tes enfants et tes petits-enfants seront en vie."
    },
    {
        question: "Quelle part des cours d’eau en France contient des pesticides ?",
        options: ["47%", "76%","92%"],
        answer: "92%",
		details: "Fleuve, rivière, ruisseau… En France, 92 % des cours d’eau, quelle que soit leur taille ou leur point d’origine, contiennent des pesticides. Ces derniers proviennent notamment des terrains cultivés situés à proximité en circulant dans les sols. La présence de ces substances chimiques dans l’eau perturbent et dégradent les écosystèmes aquatiques."
    },
	{
	    question:"En hiver et à quantité égale, lequel de ces aliments émet le plus de CO2 ?",
		options:["Banane de Martinique","Tomates d'Espagne","Le café colombien","Le rutabaga picard"],
		answer:"Tomates d'Espagne",
		details: "À quantité égale, produire une tomate en hiver génère aujourd'hui plus de C02 que le transport des autres aliments..."
	},
	{
        question: "Quel pays a le plus d'émissions de gaz à effet de serre par habitant ?",
        options: ["Les Etats-Unis", "Le Japon", "L'Australie","La Norvège"],
        answer: "L'Australie"
    },
    {
        question: "En matière de transport, quelle action aurait le plus d’impact ?",
        options: ["Lancer un grand plan pour favoriser les vélos taxis","Améliorer l'efficience des avions","Construire un réseau global de trains à grande vitesse","Développer le télétravail"],
        answer: "Améliorer l'efficience des avions",
		details:"C'est l'efficience des avions ! Le transport aérien reste l'une des sources majeures de notre empreinte carbone, selon les scientifiques du projet Drawdown."
    },
	{
	    question:"Quel est l'intérêt de la couche d'ozone ?",
		options:["Elle est responsable de la couleur du ciel","Elle diminue l'effet de serre","Elle protège la terre des UV"],
		answer:"Elle protège la terre des UV"
	},
	{
        question: "Selon toi, depuis ces 30 dernières années, la pollution de l’air a… ?",
        options: ["Augmenté", "Est restée constante", "Diminué"],
        answer: "Diminué"
    },
    {
        question: "Nous sommes plus protégés de la pollution à l’intérieur qu’à l’extérieur.",
        options: ["Vrai", "Faux"],
        answer: "Faux"
    },
    {
        question: "Selon toi, depuis ces 30 dernières années, la pollution de l’air a… ?",
        options: ["Augmenté", "Est restée constante", "Diminué"],
        answer: "Diminué"
    },
    {
        question: "Nous sommes plus protégés de la pollution à l’intérieur qu’à l’extérieur.",
        options: ["Vrai", "Faux"],
        answer: "Faux",
		details:"Nous passons plus de 80% de notre temps dans des endroits clos et contrairement à ce que l’on pense, l’air intérieur est pollué tout comme l’air extérieur, voir plus !Il est ainsi recommandé d’aérer les pièces de son appartement/sa maison tous les jours au moins 10 à 15 minutes, de préférence matin et soir, en dehors des heures de trafic, été comme hiver."
    },
	{
	    question:"Quel est l'intérêt de la couche d'ozone ?",
		options:["Elle est responsable de la couleur du ciel","Elle diminue l'effet de serre","Elle protège la terre des UV"],
		answer:"Elle protège la terre des UV"
	},
	{
        question: "Qu'est-ce que l'effet de serre ?",
        options: ["Le CO2", "L'absorption des rayons infrarouges réfléchis par la Terre", "L'effet de la couche d'ozone","L'effet du trou de la couche d'ozone"],
        answer: "L'absorption des rayons infrarouges réfléchis par la Terre"
    },
    {
        question: "Qu'est-ce qui pollue le plus ?",
        options: ["Faire tourner le lave-vaisselle sur une année", "Regarder Netflix pendant deux heures une fois par semaine pendant un an"],
        answer: "Regarder Netflix pendant deux heures une fois par semaine pendant un an",
		details:"43 kgCO2 pour le premierchoix, le 2ème 57.90 kgCO2 Cette valeur comprend la construction du téléviseur, l’utilisation des appareils en Wifi, la transmission de la donnée et la construction et l’usage des datacenters."
    },
	{
	    question:"Qu'est-ce qui pollue le plus ?",
		options:["Faire deux allers-retours Brest-Paris en voiture","Manger de la viande rouge deux fois par semaine pendant un an"],
		answer:"Manger de la viande rouge deux fois par semaine pendant un an",
		details:"Les bœufs sont des ruminants. Leur digestion produit (sous forme de rots essentiellement) énormément de méthane, un gaz à effet de serre très puissant (25 fois plus réchauffant que le CO2). De plus, l’élevage de bœuf requiert énormément d’espace pour faire pâturer les animaux mais aussi pour produire leur alimentation."
	},
	{
        question: "Quelle est le temps de décomposition d'une bouteille en plastique ?",
        options: ["AEntre 5 et 10 ans", "Entre 10 et 100 ans", "Entre 100 et 1000 ans"],
        answer: "Entre 100 et 1000 ans",
		details:"Quand un morceau de plastique tombe par terre, il met tellement de temps à se décomposer qu'il n'aura pas disparu quand tes enfants et tes petits-enfants seront en vie."
    },
    {
        question: "Quelle part des cours d’eau en France contient des pesticides ?",
        options: ["47%", "76%","92%"],
        answer: "92%",
		details: "Fleuve, rivière, ruisseau… En France, 92 % des cours d’eau, quelle que soit leur taille ou leur point d’origine, contiennent des pesticides. Ces derniers proviennent notamment des terrains cultivés situés à proximité en circulant dans les sols. La présence de ces substances chimiques dans l’eau perturbent et dégradent les écosystèmes aquatiques."
    },
	{
	    question:"En hiver et à quantité égale, lequel de ces aliments émet le plus de CO2 ?",
		options:["Banane de Martinique","Tomates d'Espagne","Le café colombien","Le rutabaga picard"],
		answer:"Tomates d'Espagne",
		details: "À quantité égale, produire une tomate en hiver génère aujourd'hui plus de C02 que le transport des autres aliments..."
	},
	{
        question: "Quel pays a le plus d'émissions de gaz à effet de serre par habitant ?",
        options: ["Les Etats-Unis", "Le Japon", "L'Australie","La Norvège"],
        answer: "L'Australie"
    },
    {
        question: "En matière de transport, quelle action aurait le plus d’impact ?",
        options: ["Lancer un grand plan pour favoriser les vélos taxis","Améliorer l'efficience des avions","Construire un réseau global de trains à grande vitesse","Développer le télétravail"],
        answer: "Améliorer l'efficience des avions",
		details:"C'est l'efficience des avions ! Le transport aérien reste l'une des sources majeures de notre empreinte carbone, selon les scientifiques du projet Drawdown."
    },
	{
	    question:"Quel est l'intérêt de la couche d'ozone ?",
		options:["Elle est responsable de la couleur du ciel","Elle diminue l'effet de serre","Elle protège la terre des UV"],
		answer:"Elle protège la terre des UV"
	},
	{
        question: "Selon toi, depuis ces 30 dernières années, la pollution de l’air a… ?",
        options: ["Augmenté", "Est restée constante", "Diminué"],
        answer: "Diminué"
    },
    {
        question: "Nous sommes plus protégés de la pollution à l’intérieur qu’à l’extérieur.",
        options: ["Vrai", "Faux"],
        answer: "Faux"
    },
	
    
];

cube.addEventListener('click', lancerAnimation);

function lancerAnimation() {
    cube.style.animation = 'none';
    void cube.offsetWidth; // Trigger reflow
    cube.style.animation = 'roll-animation 3s forwards';
    setTimeout(animerCube, 2000);
}

function animerCube() {
    const result = Math.floor(Math.random() * 6) + 1;
    n += result;
    const id = n.toString();
    const sq = document.getElementById(id);
    const faces = cube.querySelectorAll('.face');
    faces.forEach(face => face.textContent = result);

    if (sq) {
        sq.style.backgroundColor = 'blue';
        setTimeout(function() {
            afficherQuestion(n - 1);
        }, 1000);
    } else {
        console.log(`Erreur : le carré avec l'ID ${id} n'existe pas.`);
    }
}

//count the answer to show on the result page
function countAnswers(isCorrect) {
    if (isCorrect) {
        sessionStorage.setItem('correctAnswers', parseInt(sessionStorage.getItem('correctAnswers') || 0) + 1);
    } else {
        sessionStorage.setItem('wrongAnswers', parseInt(sessionStorage.getItem('wrongAnswers') || 0) + 1);
    }
}

     function validerReponse(n) {
            var reponse = document.querySelector('input[name="question1"]:checked');
            document.getElementById('quiz-section').style.display = 'none';
            const question = questions[n];
            if (reponse.value==question.answer) {
			    
                countAnswers(true);
                const image = document.getElementById('earth');
                image.src = 'HAPPY.svg';
				
                document.getElementById('svg-button-container').style.display = 'block';
				
            } else {
                // Sélectionner l'élément image par son ID
                countAnswers(false);
                const image = document.getElementById('earth');
                image.src = 'SAD.svg';
                document.getElementById('svg-button-container').style.display = 'block';
            }
        }
	function autreAction(){
	         document.getElementById('svg-button-container').style.display = 'none';
	         lancerAnimation();
	}
	
	function afficherQuestion(n) {
    const question = questions[n]; 

    if (question) {
        // Afficher la question dans le quiz-section
        const quizSection = document.getElementById('quiz-section');
        quizSection.style.display = 'block';
        quizSection.innerHTML = ''; // Effacer le contenu précédent
        
		const img = document.createElement('img');
        img.src ="face.svg";
        quizSection.appendChild(img);
		
        const questionElement = document.createElement('p');
        questionElement.textContent = question.question;
        quizSection.appendChild(questionElement);

        // Créer les options
        const optionsContainer = document.createElement('div');
        question.options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'question1'; // Assurez-vous que le nom du groupe radio est unique
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
			
            optionsContainer.appendChild(label);
            optionsContainer.appendChild(document.createElement('br'));
			optionsContainer.appendChild(document.createElement('br'));
			optionsContainer.appendChild(document.createElement('br'));
        });
        quizSection.appendChild(optionsContainer);
		const b = document.createElement('button');
        b.textContent = "Valider";
		b.addEventListener('click', () => validerReponse(n));
        quizSection.appendChild(b);
    } else {
        console.log(`Erreur : aucune question disponible.`);
    }
	
	
}