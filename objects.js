const people = [
        {name: 'Alice', age: 17},
        {name: 'Eunice', age: 22},
        {name: 'Charlie', age: 14},
        {name: 'Max', age: 19},
    ];
function checkAge(person){
  let newArr = [];
  for(let a = 0; a<person.length; a++){
    if(person[a].age >= 18)
    newArr.push(people[i].name)
  }
        
    }
    checkAge()

const products =[
    {name: 'laptop', price: 1200, category: 'electronics'},
    {name: 'shirt', price: 25, category: 'clothing'},
    {name: 'headphones', price: 80, category: 'electronics'},
    {name: 'shoes', price: 60, category: 'clothing'},
]

function getObjects(){
    var x = Object.groupBy( products, item =>{
        return item.category
    })
    console.log(x);
}
getObjects()

