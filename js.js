"use strict"
// cia labai daug yra ko nereik bet viskas veikia kaip turetu....
const task = document.getElementById('task');
const priority = document.getElementById('priority');
const myTablebody = document.querySelector('tbody');
const myTablehead = document.querySelector('thead');
const myForm = document.querySelector('form');
const mytable = document.getElementById('table')
const status1 = document.getElementById('status');
const myButton = document.getElementById('myButton');
const progressvalue = document.getElementById('progress');
const date = document.getElementById('date');
const valueset = 0;
const divtable = document.getElementById('divtable');
var rowcount = 0;
myButton.addEventListener('click', function (e) {
    e.preventDefault();
    addToDo();
    myForm.reset();
});

function addToDo() {
    if (task.value !== '' && priority.value !== "choose priority") {
        myTablehead.removeAttribute("hidden")
     
        // console.log(task.value);
        //console.log(priority.value);
        // kuriu eilute, ja idedu i table body
        const myRow = document.createElement('tr');
        myTablebody.appendChild(myRow);
        // kuriu stulpeli, i ji idedu task reiksme
        const myCol = document.createElement('td');
        myCol.textContent = task.value;
        //   stulpeli appendinu eilutei     
        myRow.appendChild(myCol);

        //   mano kodas priority reiksmei ideti
        const myCol1 = document.createElement('td');
        const myPriority = document.createElement('p');
        myPriority.innerText = priority.value;
        switch (priority.value) {
            case 'High':
                myPriority.className = "btn btn-warning";
                break;
            case 'Normal':
                myPriority.className = "btn btn-success";
                break;
            case 'Low':
                myPriority.className = "btn btn-info";
                break;
        }
        myCol1.appendChild(myPriority)
        myRow.appendChild(myCol1);
        //status
        const myCol3 = document.createElement('td');
        const status = document.createElement('p');
        status.innerText = status1.value;

        myCol3.appendChild(status);
        myRow.appendChild(myCol3);


        //bar-------------------------------------------------
        const myCol4 = document.createElement('td');
        const bar = document.createElement('div');
        const div2 = document.createElement('div');
        div2.innerText = progressvalue.value;


        bar.setAttribute("class", "progress");
        div2.setAttribute("role", "progressbar");
        div2.setAttribute("aria-valuemin", "0");
        div2.setAttribute("aria-valuemax", "100");

        switch (progressvalue.value) {
            case '0%':
                div2.setAttribute("class", "progress-bar");
                div2.setAttribute("aria-valuenow", "0");
                break;
            case '25%':
                div2.setAttribute("class", "progress-bar bg-danger");
                div2.setAttribute("style", "width: 25%");
                div2.setAttribute("aria-valuenow", "25");
                break;
            case '50%':
                div2.setAttribute("class", "progress-bar bg-info");
                div2.setAttribute("style", "width: 50%");
                div2.setAttribute("aria-valuenow", "50");
                break;
            case '75%':
                div2.setAttribute("class", "progress-bar bg-warning");
                div2.setAttribute("style", "width: 75%");
                div2.setAttribute("aria-valuenow", "75");
                break;
            case '100%':

                div2.setAttribute("class", "progress-bar bg-success");
                div2.setAttribute("role", "progressbar");
                div2.setAttribute("style", "width: 100%");
                div2.setAttribute("aria-valuenow", "100");
                div2.setAttribute("aria-valuemin", "0");
                div2.setAttribute("aria-valuemax", "100");
                break;
        }

        bar.appendChild(div2);
        myCol4.appendChild(bar);
        myRow.appendChild(myCol4);

        //date-----------------------


        const myCol5 = document.createElement('td');
        const datevalue = document.createElement('p');
        datevalue.innerText = date.value;

        myCol5.appendChild(datevalue);
        myRow.appendChild(myCol5);

        //current time--------------- 


        const myCol6 = document.createElement('td');
        const timevalue = document.createElement('p');

        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();


        timevalue.textContent = datetime;
        myCol6.appendChild(timevalue);
        myRow.appendChild(myCol6);



        //delete mygtuko kurimas
        const myCol2 = document.createElement('td');
        const myDeleteBtn = document.createElement('button');
        myDeleteBtn.innerText = "Delete";
        myDeleteBtn.className = "btn btn-danger";
        myCol2.appendChild(myDeleteBtn);
        myRow.appendChild(myCol2);

        //del mygtuko funkcionalumas
        myDeleteBtn.addEventListener("click", function (e) {
            e.preventDefault();
            myTablebody.removeChild(myRow)
            rowcount = rowcount - 1;
            if(rowcount == "0"){
                document.location.reload(true); //if it works it works :)
            };
        });



        rowcount = rowcount + 1;
    } else {
        alert("Visi laukai turi buti uzpildyti")
    }
}

/* $(document).ready(function() {
    var v = $('#hideheader').html();
    var name = $.trim(v);
        if (name === '') {
            $("#hide").hide();

        } else {
            $("#hide").show();
        }
   }); */
