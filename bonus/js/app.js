
/*******************************************************************************
    MILESTONE 0
 *******************************************************************************/



function createTeamEl(name,role,image) {
    const teamElement ={
        name: name,
        role: role,
        image: image
    }
    return teamElement
}

const team = [
    createTeamEl('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    createTeamEl('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    createTeamEl('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    createTeamEl('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    createTeamEl('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    createTeamEl('Barbara Ramos', 'Graphic Desiner', 'barbara-ramos-graphic-designer.jpg'),    
]

console.log(team)

/*******************************************************************************
    MILESTONE 1
 *******************************************************************************/
    console.log(team)

/*******************************************************************************
    MILESTONE 2
 *******************************************************************************/

const listaEl = document.querySelector('.grid')

team.forEach(onLoop)


/*******************************************************************************
    BONUS 1 & 2
 *******************************************************************************/
// Trasformare la stringa foto in una immagine effettiva e organizzare i singoli membri in card

function onLoop(teamElement){
    listaEl.innerHTML += `
    <li class="card">
        <img class="card-img" src="../img/${teamElement.image}">
        <div class="card-text">
        <h4 class="card-title">${teamElement.name}</h4>
        <span class="card-role">${teamElement.role}</span>
        </div>
    </li>`
    }