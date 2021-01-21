console.log("IMP Notes");
showNotesimp();

// If user adds a note, add it to the localStorage
let addBtnimp = document.getElementById("imp");
addBtnimp.addEventListener("click", function (e) {
    let addTxtimp = document.getElementById("addTxtimp");
    let notesimp = localStorage.getItem("notesimp");
    if (notesimp == null) {
        notesObjimp = [];
    } else {
        notesObjimp = JSON.parse(notesimp);
    }
    notesObjimp.push(addTxtimp.value);
    localStorage.setItem("notesimp", JSON.stringify(notesObjimp));
    addTxtimp.value = "";
    //   console.log(notesObj);
    showNotesimp();
});

// Function to show elements from localStorage
function showNotesimp() {
    let notesimp = localStorage.getItem("notesimp");
    if (notesimp == null) {
        notesObjimp = [];
    } else {
        notesObjimp = JSON.parse(notesimp);
    }
    let htmlimp = "";
    notesObjimp.forEach(function (element, index) {
        htmlimp += `
            <div class="imps">
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1} IMP</h5>
                            <p class="card-text"> ${element}</p>
                            <button id="${index}"onclick="deleteNoteimp(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>
             </div>
             <style>
                .imps{
                    background-color : red;
                }            
            </style>`;
        // color
       
    });
    let notesElmimp = document.getElementById("notesimp");
    if (notesObjimp.length != 0) {
        notesElmimp.innerHTML = htmlimp;
    } else {
        notesElmimp.innerHTML = `Nothing to show! Use "IMP" section above to add notes.`;
    }
}

// Function to delete a note
function deleteNoteimp(index) {
    //   console.log("I am deleting", index);

    let notesimp = localStorage.getItem("notesimp");
    if (notesimp == null) {
        notesObjimp = [];
    } else {
        notesObjimp = JSON.parse(notesimp);
    }

    notesObjimp.splice(index, 1);
    localStorage.setItem("notesimp", JSON.stringify(notesObjimp));
    showNotesimp();
}


let searchimp = document.getElementById('searchTxt');
searchimp.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})