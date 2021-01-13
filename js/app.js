'use strict';
var busmallproductarray = [];
var shownImages = [];
var firstproductimg = document.getElementById('firstproductimg');
var secondproductimg = document.getElementById('secondproductimg');
var thirdproductimg = document.getElementById('thirdproductimg');

var firstproducttext = document.getElementById('firstproduct_h2');
var secondproducttext = document.getElementById('secondproduct_h2');
var thirdproducttext = document.getElementById('thirdproduct_h2');

var busmallsection = document.getElementById('allproducts');

var busmallcanvas = document.getElementById('busmallChart').getContext('2d');

var trialsleft = 25;
function BusMall(name, image) {
    this.image = image;
    this.name = name;
    this.url = 'img/' + image;
    this.counter = 0;
    busmallproductarray.push(this);
}
new BusMall('bag', 'bag.jpg');
new BusMall('banana', 'banana.jpg');
new BusMall('bathroom', 'bathroom.jpg');
new BusMall('boots', 'boots.jpg');
new BusMall('breakfast', 'breakfast.jpg');
new BusMall('bubblegum', 'bubblegum.jpg');
new BusMall('chair', 'chair.jpg');
new BusMall('cthulhu', 'cthulhu.jpg');
new BusMall('dog duck', 'dog-duck.jpg');
new BusMall('dragon', 'dragon.jpg');
new BusMall('pen', 'pen.jpg');
new BusMall('pet sweep', 'pet-sweep.jpg');
new BusMall('scissors', 'scissors.jpg');
new BusMall('shark', 'shark.jpg');
new BusMall('sweep', 'sweep.png');
new BusMall('tauntaun', 'tauntaun.jpg');
new BusMall('unicorn', 'unicorn.jpg');
new BusMall('usb', 'usb.gif');
new BusMall('water can', 'water-can.jpg');
new BusMall('wine glass', 'wine-glass.jpg');
// console.log(busmallproductarray);
function renderproduct(firstimg, secondimg, thirdimg) {
    firstproductimg.setAttribute('src', busmallproductarray[firstimg].url);
    secondproductimg.setAttribute('src', busmallproductarray[secondimg].url);
    thirdproductimg.setAttribute('src', busmallproductarray[thirdimg].url);
    
    firstproducttext.textContent = busmallproductarray[firstimg].name;
    secondproducttext.textContent = busmallproductarray[secondimg].name;
    
    thirdproducttext.textContent = busmallproductarray[thirdimg].name;
    busmallproductarray[firstimg].numberOfTimesShown++;
    busmallproductarray[secondimg].numberOfTimesShown++;
    busmallproductarray[thirdimg].numberOfTimesShown++;
}
function renderChart() {
    var arrayOfproductname = [];
    var arrayOfproductcount = [];
    var arrayOfproductshown = [];
    busmalldatastoreg();
    function busmalldatastoreg() {
    }
    console.log(busmalldatastoreg);
    for (var index = 0; index < busmallproductarray.length; index++) {
        arrayOfproductname.push(busmallproductarray[index].name);
        arrayOfproductcount.push(busmallproductarray[index].counter);
        arrayOfproductshown.push(busmallproductarray[index].numberOfTimesShown);

    }
    var myChart = new Chart(busmallcanvas, {
        type: 'bar',
        data: {
            labels: arrayOfproductname,
            datasets: [
                {
                    label: '# of Product Clicks',
                    data: arrayOfproductcount,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
        console.log(arrayOfproductcount);

}

function checkAvailability(selectedproductname) {
    for (var index = 0; index < shownImages.length; index++) {
        if (shownImages[index].name === selectedproductname) {
            return true;
        }
    }
    return false;
console.log(selectedproductname);
}

function pickproduct() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        do {
            var imgIndex = Math.round(Math.random() * (busmallproductarray.length - 1))

        } while (shownImages.includes(imgIndex) || arr.includes(imgIndex));
        arr.push(imgIndex)
    }
    shownImages = arr;;
    console.log(arr);
    renderproduct(arr[0], arr[1], arr[2])
}
console.log(shownImages);
function checkproduct(productindicator) {
    for (var index = 0; index < busmallproductarray.length; index++) {
        if (busmallproductarray[index].url === productindicator) {
            busmallproductarray[index].counter++;
            trialsleft--;
        }
    }
}
console.log(checkproduct);
// pickproduct();
function countproduct(event) {
    var targetid = event.target.id;
    // console.log('event= '+event);
    console.log('event.target= ' + event.target);
    if (trialsleft !== 0) {
        console.log("trialsleft !== 0");
        if (targetid === 'firstproductimg' || targetid === 'secondproductimg' || targetid === 'thirdproductimg') {
            var productindicator = event.target.getAttribute('src');
            checkproduct(productindicator);
            pickproduct();
        }
    } else {
        // console.log("trialsleft== 0");
        busmallsection.removeEventListener('click', countproduct);
        console.log(busmallproductarray);
        renderChart();
    }
}
pickproduct(); 
       busmallsection.addEventListener('click', countproduct);



function checkAndRestore(){
        localStorage.setItem('allproducts',JSON.stringify(busmallproductarray));

    if(localStorage.length>0){
        busmallproductarray=JSON.parse(localStorage.getItem(allproducts));
    }

}

checkAndRestore();

// lab 13
// var orderarray = [];
// var orderForm = document.getElementById('orderForm');
// var orders = document.getElementById('orders');
// var clearDataBtn = document.getElementById('clearLocalStorage');
// console.log(localStorage);
//
//     var clearDataBtn = document.getElementById('clearLocalStorage');

//     function clearLocalStorage(){
//         localStorage.clear();
//         arrayOfproductname = [];
//         // renderproductorder();
//     }

//             localStorage.setItem('allproducts', JSON.stringify(arrayOfproductname));
//             arrayOfproductname = JSON.parse(localStorage.getItem('allproducts')); 
//             clearDataBtn.addEventListener('click', clearLocalStorage);
// //

// console.log(arrayOfproductname);
// }

// console.log(renderChart);
// function Productorder(name, nameofprouduct, numberofproduct, orderas) {
//     this.name = name;
//     this.nameofprouduct = nameofprouduct;
//     this.numberofproduct = numberofproduct;
//     this.orderas = orderas;
//     orderarray.push(this);
//     busmalldata();
// }
// function busmalldata() {
//     localStorage.setItem('order', JSON.stringify(orderarray));
// }
// function clearLocalStorage() {
//     localStorage.clear();
//     orderarray = [];
//     renderproductorder();
// }
// /
// function submitOrder(event) {
//     event.preventDefault();
//     var name = event.target.name.value;
//     var nameofprouduct = event.target.nameofproduct.value;
//     var numberofproduct = event.target.numberofproduct.value;
//     var orderas = event.target.orderas.value;
//     console.log(localStorage);
//     new Productorder(name, nameofprouduct, numberofproduct, orderas);
//     console.log(orderarray);
//     renderproductorder();
// }
// function renderproductorder() {
//     orders.innerHTML = '';
//     for (var index = 0; index < orderarray.length; index++) {
//         var orderasobject = orderarray[index];
//         var newListItem = document.createElement('li');
//         var par = document.createElement('p');
//         par.textContent = `${orderasobject.name} wants ${orderasobject.numberofproduct} items of  ${orderasobject.nameofprouduct}   as  ${orderasobject.orderas}  `;
//         newListItem.appendChild(par);
//         orders.appendChild(newListItem);
//     }
// }
// orderForm.addEventListener('submit', submitOrder);
// clearDataBtn.addEventListener('click', clearLocalStorage);
// checkAndRestore();
//////
//////
//lab12

// function checkproduct(productindicator) {
//   do {
//         var firstimg = Math.round(Math.random() * (busmallproductarray.length - 1))
//         var firstproductimgname = busmallproductarray[firstimg].name;
//     } 
//     while (checkAvailability(firstproductimgname));

//     do 
//     {
//         var secondimg = Math.round(Math.random() * (busmallproductarray.length - 1))
//         var secondproductimgname = busmallproductarray[secondimg].name;
//     } while (firstimg == secondimg || secondimg === thirdimg  || checkAvailability(secondproductimgname));
//     do 
//     {
//         var thirdimg = Math.round(Math.random() * (busmallproductarray.length - 1))
//         var thirdproductimgname = busmallproductarray[secondimg].name;
//     } 
//     while (firstimg === thirdimg || secondimg === thirdimg || checkAvailability(thirdproductimgname));
//     }}