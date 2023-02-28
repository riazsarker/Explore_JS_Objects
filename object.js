//create object using literals 
const player ={};

player.name ='small nirob';
player.specialty =' batsman';
// console.log(player);
player.bat= function(){
    console.log('swing your bat');
}
// console.log(player);
// player.bat()
//2. Object constructor
const student ={name:'pandey',job:'khan bande',
ball: function(){
    console.log('throw the ball')
},
salary:100
}
// console.log(studen
//3. object create method
const item = Object.create(student);
console.log(item.name);
//4. class