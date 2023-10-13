/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.innerText = temple.templeName;

    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);

    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templeList = await response.json();
  displayTemples(templeList);
  //sortBy(templeList);
};
/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};
/* sortBy Function */
const sortBy = (templeList) => {
  reset();
  let filter = document.querySelector("#sortBy").value;

  //   filterList.forEach((temple) => {
  //     console.log(temple.location);
  //   });
  let filterList = [];
  switch (filter) {
    case "utah":
      filterList = templeList.filter((temple) => {
        item = temple.location.toLowerCase();
        if (item.includes("utah") === true) {
          return temple;
        }
      });
      //   filterList.forEach((temple) => {
      //     console.log(temple.location);
      //   });
      displayTemples(filterList);
      break;
    case "notutah":
      filterList = templeList.filter((temple) => {
        item = temple.location.toLowerCase();
        if (item.includes("utah") === false) {
          return temple;
        }
      });
        // filterList.forEach((temple) => {
        //   console.log(temple.location);
        // });
      displayTemples(filterList);
      break;
    case "older":
        filterList = templeList.filter((temple) => {
            item = Date.parse(temple.dedicated);
            console.log(item,temple.dedicated)
            let ageFilter = new Date(1950,0,1) 
            //console.log(ageFilter);
            if (item < ageFilter) {
              return temple;
            }
          });        

          displayTemples(filterList);
      break;
    case "all":
        displayTemples(templeList);
      break;
    default:

    // code block
  }
};

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});