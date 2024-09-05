// const calAvg = (a,b,c) => (a + b + c) / 3;
// console.log(calAvg(20,30,70));

// let DolhineScore = calAvg(44, 23 , 71);
// let Koalas = calAvg(65, 54, 49);
// console.log(DolhineScore, Koalas);

// const checkWinner = function(avgDol, avgKoalas){
//     if (avgDol >= 2 * avgKoalas) {
//         console.log(`Dolphine Wins (${avgDol} vs. ${avgKoalas})`);
//     }else if(avgKoalas >= 2*avgDol){
//         console.log(`Koalas Wins (${avgDol} vs. ${avgKoalas})`);
//     }else{
//         console.log(`NO Teams Won`);
//     }
// }
// checkWinner(DolhineScore, Koalas);

// checkWinner(100, 900)

// const Dolhine = calAvg(10,20,30);
// const Koalass = calAvg(90,80,70);
// console.log(Dolhine, Koalass);
// checkWinner(Dolhine, Koalass);

//ARRAYS
//  const numbers = ['one','two','three'];
// console.log(numbers);

// const years = new Array(1,2,3);
// console.log(years.length);
// years[0] = 6;
// console.log(years);
// years.push(49);
// console.log(years);
// years.unshift(34);   //add to front;
// const n = years.pop();
// console.log(years,n);
// years.shift(); //removes at front;
// console.log(years);
// console.log(years.indexOf(3));
// console.log(years.includes(3));

//OBJECTS

// const place = {
//     name: 'America',
//     year: 1970,
//     precidents: ['Joe Biden','Donald Trump'],

//     // calcAge: function(year){
//     //     return 2037 - year;
//     //}
//     // calcAge: function (){
//     //     console.log(this);
//     //     return 2037 - this.year;
//     // }    
//     calcAge: function (){
//         this.age = 2037 - this.year;
//         return  this.age;
//     }    
// };
// // console.log(place.name +'                      '+ place.year);

// // const interestedIn = prompt('What do you want to know');
// // console.log(place[interestedIn]);

// console.log(place.calcAge(1997));
// console.log(place['calcAge'](1997));
// console.log(place.age);

// // FOR LOOOP
 const newArray =[1,2,3,4];
// for(let i = 0;i < newArray.length;i++){
//     console.log(newArray[i], typeof newArray[i]);
// }

// const year = [1990, 1992, 2000, 2001, 2004];
// const ages = [];

// for(let i =0;i< year.length;i++){
//     ages.push(2037 - year[i]);
// }
// console.log(ages);
// for(let i = 1;i < newArray.length;i++){
//     if(i % 2 !== 0) {
//         console.log(newArray[i], typeof newArray[i]);
//     } 
//     break;
// }



//Recrsion;

// const displayArrayRec= function(newArray,i){
    
//     if(i == newArray.length) return -1;
    
    
    
//     console.log(newArray[i]);
//     i++;
//     displayArrayRec(newArray,i);
// }
// let i = 0;
// displayArrayRec(newArray,i);

// WHILE LOOP

// let i = 0;
// while(i < 10){
//     console.log(i+1);
//     i++;
// }












