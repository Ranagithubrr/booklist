var myname = document.querySelector('#name');
var author = document.querySelector('#author');
var year = document.querySelector('#year');
var submitted = document.querySelector('#submitted');



submitted.addEventListener("click", subClicked);

function subClicked(){
    if(myname.value=='' || author.value=='' || year.value==''){
        alert("Could Not Be Empty Any Fields")
    }else{
        var myNewRow = document.createElement('tr');

        // new name
        var newName = document.createElement('td');
        newName.innerHTML = myname.value;
        myNewRow.appendChild(newName);
        // new author
        var newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        myNewRow.appendChild(newAuthor);
        // new year
        var newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        myNewRow.appendChild(newYear);


        // append the row
        var myTable = document.querySelector('tbody');
        myTable.appendChild(myNewRow);
    }
}