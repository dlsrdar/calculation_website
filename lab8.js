/* Task2.js - Add your Java Script Code Here */

function problemA(){

 var p = document.getElementById("mydata");

  
 var input1 = parseInt(prompt("enter number m: "));
 var input2 = parseInt(prompt("enter number n: "));
 var resu = multiply(input1, input2);
 p.innerHTML= input1+" * " +input2+" = "+resu;  // generate output as shown in pdf
}

// a recursive function
function multiply(m, n){
	 if (n ==0)
	 return 0;
	 else if (n==1)
	 return m;
	 else 
	 var k=m+multiply(m,n-1);
	 return k;

}



function problemB(){

 var p = document.getElementById("mydata");

 var input = parseInt(prompt("enter number: "));

 var resu = count37(input);
 
 p.innerHTML="number of 3 or 7's in "+input+":"+  resu;  // generate output as shown in pdf

}

function count37(num){
	if (num==3 || num==7)
	return 1;
	else if (num<10)
	return 0;
	var c = num%10;
	if (c==3 || c ==7)
	return 1+count37(Math.floor(num/10));
	else
	return count37(Math.floor(num/10));

	 
	
}

 

function problemC(){

 var p = document.getElementById("mydata");

 //var input = parseInt(prompt("enter number: "));

 var arr=[7, 3, 5, 9, 8, 6, 1, 4]; 

 var sum0 = arraySum0(arr);
 
 var sum = arraySum(arr, 0);

 p.innerHTML= arr + " sum is: " + sum0 + " " + sum;

}

function arraySum0(arr){
	if ( arr.length == 1)   // or ==0 return 0
		return arr[0];
	return arr[0] + arraySum0(arr.slice(1));
	
}

function arraySum(arr, index){
	if (index>=arr.length)
	return 0;
	else
	return arr[index]+arraySum(arr,index+1);
	 	
}


function problemD(){

 var p = document.getElementById("mydata");

 var arr=[7, 3, 5, 9, 8, 6, 1, 4]; 

 var max0 = arrayMaxIterative(arr);
 
 var max1 =  arrayMaxRecursiveA(arr);

 var max2 =  arrayMaxRecursiveB(arr, 0);
 
 p.innerHTML= arr + " max is: " + max0 + " " + max1 + " " + max2;

}

function arrayMaxIterative(arr){
	var arr=[7, 3, 5, 9, 8, 6, 1, 4];
	var b = Math.max.apply(Math,arr);
	return b;
		
}
	 
// pass arr only. 
function arrayMaxRecursiveA(arr){
	var max =arr[0];
	if (arr.length==1)
	return arr[0];
	else
	if (max>arrayMaxRecursiveA(arr.slice(1)))
	return max;
	else
	return arrayMaxRecursiveA(arr.slice(1));

	 
}

// pass arr and a sliding index
function arrayMaxRecursiveB(arr, index){
	var max =arr[0];
	if (index>=arr.length)
	return 0;
	else
	if (max>arrayMaxRecursiveB(arr,index+1))
	return max;
	else
	return Math.max(arr[index],arrayMaxRecursiveB(arr,index+1));
	 
}


function problemE()
{
  var p = document.getElementById("mydata");

  var input = prompt("enter string to be reversed: ");

  var resu = reverse(input)
  p.innerHTML= input + " <--> " + resu;

}
function reverse(s){
	if (s.length<2)
	return s[0];
	else
	return reverse(s.slice(1))+s[0];
	 

}
  
function problemF(){

	var arr=[8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 1000, 5001, 20000, 20000, 34511];
	var key = parseInt(prompt("enter search key for 8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 1000, 5001, 20000, 20000, 34511"));
	
	var p = document.getElementById("mydata");
	
    p.innerHTML= key +" in arr: " +  findit(key, arr, 0, arr.length-1);

}

function findit(x, A, i, j){
	var mid = Math.floor((i+j)/2);
	if(i>j)
	return false;
	else if (x==A[mid])
	return true;
	
	else if (x < A[mid])
	return findit(x,A,i,mid-1);
	else if (x>A[mid])
	return findit(x,A,mid+1,j);
	 

}
