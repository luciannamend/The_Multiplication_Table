
let maxOuterListItems = 10;
let maxInnerListItems = 10;

// console.log('START'); //TEST

window.addEventListener("load", (event) => {
  //only trigger w/ "load event" to control when it's excecuted
  createAList(maxOuterListItems, maxInnerListItems);
});

const createAListByUserInput = (outerListValueParam, innerListValueParam) => {
  if (innerListMax.value && outerListMax.value) {

    //if user provides both values, then:

    // Check if it's equal or less than 10 for rows and columns
    if (innerListMax.value > maxInnerListItems) { 
      alert(`Please, enter a number of rows equal or less than ${maxOuterListItems}`); // alert for max 10 rows
      return;
    }

    if (outerListMax.value > maxOuterListItems) { 
      alert(`Please, enter a number of columns equal or less than ${maxInnerListItems}`); // alert for max 10 columns
      return;
    }

    //if numbers are ok, then:
    createAList(outerListMax.value, innerListMax.value);
  }
};

// console.log('before function'); //TEST

const createAList = (outerListValueParam, innerListValueParam) => {
  // console.log('Inside the Function'); //TEST

  const elem = document.getElementById("myTable");
  // console.log('test for elem const:', elem); //TEST

  const myOuterUlElem = document.getElementById("myOuterList");

  // truthy-falsy checks:
  if (myOuterUlElem) {
    //if the element exists, then:
    myOuterUlElem.remove(); //delete it first to not repeatedilly create new tables
  }

  // -> loop (row)
  // creating ul
  const outerUL = document.createElement("table"); //first UL outeside d loop
  outerUL.setAttribute("id", "myOuterList"); // adding id to d outer UL
  elem.appendChild(outerUL); //elem is d parent
  // console.log('Creating outer UL',outerUL); //TEST

  for (let outerLiCounter = 0; outerLiCounter < outerListValueParam; outerLiCounter++) {
    // console.log("Loop", outerLiCounter); //TEST

    // creating li items (out)
    const outerLiItem = document.createElement("tr"); //OBS: for each LI we need another ul
    // console.log('Creating outer LI:', outerLiItem); //TEST

    const outerValueToDisplay = outerLiCounter + 1;

    const outerTextNode = document.createTextNode(outerValueToDisplay); //to start at 1
    outerLiItem.appendChild(outerTextNode);
    outerUL.appendChild(outerLiItem); //attaching to first UL outeside d loop

    const innerUL = document.createElement("th"); // second UL outeside d loop
    outerLiItem.appendChild(innerUL); //outerLiItem is d parent

    // -> loop (cell)
    for (let innerLiCounter = 0; innerLiCounter < innerListValueParam; innerLiCounter++) {
      //creating li items (in)
      const innerLiItem = document.createElement("tr");
      // console.log('Creating inner LI:', innerLiItem); //TEST

      const innerValueToDisplay = innerLiCounter + 1; //readability
      const multiplicationOfOuterAndInnerValues =
        outerValueToDisplay * innerValueToDisplay; //readability

      const innerTextNode = document.createTextNode(
        `${outerValueToDisplay} x ${innerValueToDisplay} = ${multiplicationOfOuterAndInnerValues}`
      );
      innerLiItem.appendChild(innerTextNode);
      innerUL.appendChild(innerLiItem);
    }
  }
};
// console.log('END'); //TEST
