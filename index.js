
// let btn = document.getElementById("btn");
// btn.addEventListener('click', function () {
//     let ourRequest = new XMLHttpRequest();
//     ourRequest.open("GET", 'https://learnwebcode.github.io/json-example/animals-2.json');
//     ourRequest.onload = function () {
//     let ourData = JSON.parse(ourRequest.responseText);
//     renderHTML(ourData);
//     }
//     console.log(ourRequest.send());
// });

// function renderHTML(data) {
//     let htmlString = " ";
//     for (i = 0; i < data.length; i++) {
//         htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>";  
//     }
    
// }const url ="https://learnwebcode.github.io/json-example/animals-2.json";
// fetch(url)
// .then(response => response.json())
// .then (data => console.log(data))
// .catch(err =>console.error("Error: ", err));

// To use async/await:


// let btn = document.getElementById("btn");
// btn.addEventListener('click', async function fetchUrl() {
//         const url ="https://learnwebcode.github.io/json-example/animals-2.json";
//         try{
//             const response = await fetch(url);
//             const data = await response.json();
//             renderHTML(data);
            
//         } catch (err) {
//             console.log(err);
//         }
        
// })

// function renderHTML(data) {
//     let result = " ";
//     for (i = 0; i < data.length; i++) {
//         result += "<p>" + data[i].name + " is a " + data[i].species + " species " + ", " + " We like  " + "</p>";
        
//         for (ii = 0; ii < data[i].foods.likes.length; ii++) {
//             if (ii === 0) {
//                 result +=   data[i].foods.likes[ii] ;
//             } else {
//                 result += "and " + data[i].foods.likes[ii] ;
//             }
//         }
//         result += " and  We dislikes ";
//         for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
//             if (ii == 0){
//                 result += data[i].foods.dislikes[ii] ;
//             } else {
//                 result +=  " and " + data[i].foods.dislikes[ii] ;
//             }
//         }
//     }
    
//     document.getElementById("animal-info").innerHTML = result;
// }


