console.log("Hello Fucker")

let a=4
console.log(a)
console.log(typeof(a))

let b = 234.345
console.log(typeof(b))

var c = "Rashed"
console.log(typeof(c))

let required = true
console.log(typeof(required))

//null and undefined

// let c = a+b ( it did not work //we cannot redeclare variable with let keyword but possible with var)

// reassigning is allowed with let
c = a+b 
//var c=a+b )this is also allowed)
console.log(c)

console.log(!required)

const flag = true

if(flag)
{
    console.log("condition satisfied")
}
else
{
    console.log("condition not satisfied")
}

let i=0
while(i>7)
{
    console.log(i)
}

do
{
i++
}while(i>10);
console.log(i)
// 2 and   5 
//  from 1 to 10 give me common multiple values of 2 and 5
console.log("***********************")
let n =0
for(let k=1;k<=100;k++)
{
    if(k%2 == 0 && k%5 == 0)
    {
        n++
    console.log(k)
    if(n ==3)
    break
    }
}

required = true
while(required)
{
console.log(required)
required= false
}

var marks = Array(6)
var marks = new Array(20,40,35,12,37,100)

var marks =[20,40,35,12,37,100]
subMarks =marks.slice(2,5)
console.log(subMarks)

console.log(marks[2]) //35
marks[3] = 14
console.log(marks) //[20,40,35,14,37,100]
console.log(marks.length) //6
marks.push(65)
// push adds the element at the end of the array
console.log(marks) //[20,40,35,14,37,100,65]
marks.pop()
//[20,40,35,14,37,100]
//pop removes the last element of the array

marks.unshift(12)
// unshift adds the element at the beginning of the array
console.log(marks)
console.log(marks.indexOf(100))
//120 in the array
console.log(marks.includes(120)) 

// printing all the elements of the array
for(i=0; i<marks.length; i++)
{
    console.log(marks[i])
}
function SumMarks()
{
var sum =0
for(let i =0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum = sum + marks[i] //32+40
}
return sum;
}
console.log(SumMarks())


// mehtod of reduce 
// syntex is 
// Array.reduce((accumalor,curret value, index, array) => code,initial value)
var marks =[20,40,35,12,37,100]
let total = marks.reduce((sum,mark) => sum + mark,0)
console.log(total)

// creating a new array for practice

var scores = [12,14,15,16,17]
var EvenScores = []
var OddScores = []
for(i=0; i<scores.length; i++)
{
    if(scores[i] %2 == 0)
    {
        EvenScores.push(scores[i])
    }
    else
    {
        OddScores.push(scores[i])
    }
}
console.log(EvenScores)
console.log(OddScores)

// syntex for filter
// array.filter((element,index,filter) => condition)
var scores = [12,14,15,16,17]
let NewFilterEvenScore = scores.filter(score => score%2 == 0)
console.log(NewFilterEvenScore)
let NewFilterOddScore = scores.filter(score => score%2 == 1)
console.log(NewFilterOddScore)

//map => create a new array provided by the condition

let NewMappedArray = scores.map(score => score*3)
console.log(NewMappedArray)

let NewMappedEvenArray = NewFilterEvenScore.map(score => score*3)
console.log(NewMappedEvenArray)

let NewMappedOddArray = NewFilterOddScore.map(score => score*3)
console.log(NewMappedOddArray)
// doing all of this in a 1 line
var scores = [12,14,15,16,17]
let SumofValue = scores.filter(score => score%2 == 0).map(score => score*3).reduce((sum,val)=> sum+val,0)
console.log(SumofValue)

//sorting
let fruits =["banana","mango","pomegrante","apple"]
console.log(fruits.sort())
console.log(fruits.reverse())

// sorting for numbers, we will need to insert code in the sort method

var scores = [12,14,15,16,17]
console.log(scores.sort((a,b) => a-b)) // ascending order
console.log(scores.sort((a,b) => b-a)) // descending order

//block of code 
//var - global level/functional
//let global level/block level {}
//const -
const greet = "Evening"
//greet = "night"

if( 1 ==1)
{
    let greet = "Afternoon"
}

function add(a,b)
{
    let greet = "Morning"
    return a+b
}

let sum =add(2,3)
console.log(sum)
console.log(greet)

//do not have name =>Anyonymus function-- Function expressions

let sumOfIntegers = function(c,d)
{
    return c+d
}

let sumOfNumbers= (c,d)=> c+d

console.log(sumOfNumbers(2,3))

//strings Manupulation

  const Person = require('./basics7')
let day = 'tuesday '
console.log(day.length)  //8
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1]) //u
//tue   day 
let splitDay =day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)


let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote =day+ "is Funday day"
console.log(newQuote)
let val =newQuote.indexOf("day",5)
console.log(val)
//tuesday is Funday  
let count = 0
let value =newQuote.indexOf("day")
while(value!== -1)
{
    count++ //2
    value =newQuote.indexOf("day",value+1)

}
console.log(count)

let person =new Person("Chris","Edward")
console.log(person.fullName())