let fruits = [];
var count = 0;

function pushInStack(){
	fruits.push(count++);
	document.getElementById("demo").innerHTML = fruits;
}
function popFromStack(){
	if(fruits.length){
    	fruits.pop();
		document.getElementById("demo").innerHTML = fruits;
    } else {
    count=0;
    document.getElementById("demo").innerHTML = "Stack is Empty";
    }

}