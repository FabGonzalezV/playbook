class Pokemon {
	constructor(name){
this.name = name;
	} 
sayHello(){

console.log(this.name +" te saluda");

}
sayMessage(message){
console.log(this.name + "dice" + `${message}`);

}

}
module.exports = Pokemon
