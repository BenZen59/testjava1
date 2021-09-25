function addCharacter (name,pv,pm,force,vitesse,magie,vitalité,chance)
{
    const body = document.querySelector('body');
    const character = document.createElement('div');

    const newName = document.createElement('p');
    const newPv = document.createElement('p');
    const newPm = document.createElement('p');
    const newForce = document.createElement('p');
    const newVitesse = document.createElement('p');
    const newMagie = document.createElement('p');
    const newVitalité = document.createElement('p');
    const newChance = document.createElement('p');

    newName.innerText ="Nom : " + name;
    newPv.innerText = "PV : " + pv;
    newPm.innerText = "PM : " + pm;
    newForce.innerText = "Force :" + force;
    newVitesse.innerText = "Vitesse : " + vitesse;
    newMagie.innerText = "Magie : " + magie;
    newVitalité.innerText = "Vitalité : " + vitalité;
    newChance.innerText = "Chance : " + chance;

    character.appendChild(newName);
    character.appendChild(newPv);
    character.appendChild(newPm);
    character.appendChild(newForce);
    character.appendChild(newVitesse);
    character.appendChild(newMagie);
    character.appendChild(newVitalité);
    character.appendChild(newChance);

    body.appendChild(character);
}

addCharacter('Benku',300,200,10,8,5,9,5);
addCharacter('Noisette',200,400,5,7,10,9,5);
addCharacter('Tenjo',250,300,5,7,8,7,5);
addCharacter('Caniche',400,200,10,8,8,7,5);
   

