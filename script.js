
idx = 0;
function HelloSomething(){
//alert("Hello " );

colors = ["blue", "yellow", "red"];
document.getElementsByClassName("floating")[0].style.color = colors[idx];
idx++;

if( idx> 2){
	idx = 0;
}
//setTimeout( HelloSomething, 1000 );
} 


function HowdySomething(a){
console.log("Howdy " + a);
} 

a = "Yit Huan"

b = [10,12,53,4,5];
setTimeout( HelloSomething, 1000 );
/*
//for( var num = 4; num >=0; num--){
for( num in b ){
	if( num < 3){
		HelloSomething( b[num] );
	}else{
		HowdySomething( b[num] );
	
	}
}

num = 0;
while( num < 5){
 // do something
 
	HelloSomething( b[num] );
 num++;
}
*/