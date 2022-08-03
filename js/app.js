
/*******************************************************************************
    MILESTONE 1
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
    createTeamEl('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-medioa-manager.jpg'),
    createTeamEl('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    createTeamEl('Barbara Ramos', 'Graphic Desiner', 'barbara-ramos-graphic-designer.jpg'),    
]

console.log(team)

