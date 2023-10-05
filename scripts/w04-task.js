/* LESSON 3 - Programming Tasks */

/* Profile Object  */             
let myProfile = {
  name: "Ernesto Quispe",
  photo: "images/me.jpg",
  favoriteFoods: [
    'Ceviche', 
    'Asado', 
    'Lomo Saltado',
    'Aji de Gallina'
  ],
  hobbies: [
    'Running',
    'Hiking',
    'Soccer' 
  ],
  placesLived:[

  ]
}
/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
  {
    place: 'Chiclayo, Peru',
    length: '17 years'
  }
);

myProfile.placesLived.push(
    {
      place: 'Santiago, Chile',
      length: '15 years'
    }
  );
  
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */

document.querySelector('#photo').setAttribute('src', myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */

myProfile.placesLived.forEach(place =>{

    Object.entries(place).forEach(([key, value]) => {

        if (key == 'place') {
            let dt = document.createElement('dt');
            dt.textContent = value;
            document.querySelector('#places-lived').appendChild(dt);
        }
        else{
            let dd = document.createElement('dd');
            dd.textContent = value;
            document.querySelector('#places-lived').appendChild(dd);
        }
    });
}

);

