import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from 'axios';
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();



var results;
var gender = [];
var byState = [];


export function find() {
    var queryURL = "https://randomuser.me/api/?results=66&nat=us";
    return axios
        .get(queryURL).then(response => {
            results = response.data.results
            console.log(results);
            newEmployeeRow()
            //return response.data;
        })
}
export function newEmployeeRow() {
    for (var i = 0; i < results.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
        
            <p id="name-`+i+`">Name: `+results[i].name.first+" "+results[i].name.last+`</p>
            <p id="number-`+i+`">Phone: `+results[i].cell+`</p>
            <p id="email-`+i+`">Email: `+results[i].email+`</p>
            <p id="state-`+i+`">State: `+results[i].location.state+`</p>
            <img id="image-`+i+`" src="`+results[i].picture.thumbnail+`"></div>`;
            
        document.getElementById('content').appendChild(div);
    }
}
export function maleEmployee() {
    gender = [];
    for (var i = 0; i < results.length; i++) {
        if (results[i].gender === "male") {
            gender.push(results[i]);
        }
    }
    filteredMaleRow()
    console.log(gender)
}





export function femaleEmployee() {
    gender = [];
    for (var i = 0; i < results.length; i++) {
        if (results[i].gender === "female") {
           gender.push(results[i]);
        }
    }
    filteredFemaleRow()
    console.log(gender);
}
export function filteredMaleRow() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < gender.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
     
            <p id="first-name-`+i+`">Name: `+gender[i].name.first+" "+gender[i].name.last+`</p>
            <p id="number-`+i+`">Phone: `+gender[i].cell+`</p>
            <p id="email-`+i+`">Email: `+gender[i].email+`</p>
            <p id="state-`+i+`">State: `+gender[i].location.state+`</p>
            <img id="image-`+i+`" src="`+gender[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}
export function filteredFemaleRow() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < gender.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
       
            <p id="first-name-`+i+`">Name: `+gender[i].name.first+" "+gender[i].name.last+`</p>
            <p id="number-`+i+`">Phone: `+gender[i].cell+`</p>
            <p id="email-`+i+`">Email: `+gender[i].email+`</p>
            <p id="state-`+i+`">State: `+gender[i].location.state+`</p>
            <img id="image-`+i+`" src="`+gender[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}
export function filterByLocation() {
    byState = [];
    var input = document.getElementById('filterState').value;
    for (var i = 0; i < results.length; i++) {
        if (results[i].location.state === input) {
            byState.push(results[i]);
        }
    }
    filteredByState()
    console.log(byState);
}
export function filteredByState() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < byState.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
        
            <p id="first-name-`+i+`">Name: `+byState[i].name.first+" "+byState[i].name.last+`</p>
            <p id="number-`+i+`">Phone: `+byState[i].cell+`</p>
            <p id="email-`+i+`">Email: `+byState[i].email+`</p>
            <p id="state-`+i+`">State: `+byState[i].location.state+`</p>
            <img id="image-`+i+`" src="`+byState[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}
export function sortNameAscending() {
    results.sort(function(a,b){
        var textA = a.name.first;
        var textB = b.name.first;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    showSorted()
}
export function sortNameDescending() {
    results.sort(function(a,b){
        var textA = b.name.first;
        var textB = a.name.first;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    showSorted()
}

export function showSorted() {
    document.getElementById('content').innerText = "";
    for (var i = 0; i < results.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`>
        
            <p id="name-`+i+`">Name: `+results[i].name.first+" "+results[i].name.last+`</p>
            <p id="number-`+i+`">Cell: `+results[i].cell+`</p>
            <p id="email-`+i+`">Email: `+results[i].email+`</p>
            <img id="image-`+i+`" src="`+results[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}



