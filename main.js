// Clean:
function GetSum( a,b )
{
  if(a==b){
  return a;
  }
  else if( a<b ){
  return a + GetSum(a+1,b);
  }
  else{
  return a + GetSum(a-1, b);
  }
}

//with comments: 
function GetSum( a,b ){
  //if the 2 nums are equal only return one
   if (a == b){
      return a;
    }
   //if a and b are not equal we must add another check statement
   //find the sum of all the numbers between a and b, including and b
  //so if a < b this loop will repeat each time, incrementing a by 1(to get all the numbers between a & b)
  //each time adding to a
  //until it equals b, then adds that to include b!
   else if (a < b){

   return a + GetSum(a+1, b);
  }
  //if a > b this //if a > b we need to store a by returning it then decrement a by 1 until a == b, each time returning the new a(for the sum)
  //  until a == b then the fxn returns a(which has been added each time) + this,
  // adding up all the numbers between a and b & it's complete
   else{

    return a + GetSum(a-1,b);
  }
}



//another solution by another user is:
//variable GetSum is a fxn with a and b as parameters
const GetSum = (a, b) => {

//assign variable to hold the max and min of both integers
  let min = Math.min(a, b),//get the lowest number of the two
      max = Math.max(a, b);//get highest number of the two
      //return max - min + 1

      //
  return (max - min + 1) * (min + max) / 2;
}
