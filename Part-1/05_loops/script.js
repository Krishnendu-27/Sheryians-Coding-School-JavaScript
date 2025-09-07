// loop use for doing repatetive task
// there for while do while for each
// identyfy the pattern.

// starting destination -> starting destination -> way ->
// use for
// starting destination -> when to stop -> way ->
// use while

/*  working of for  
for(start;end;change){
// code
}
*/
/* while working
start;
while(end){
// code 
change;
}
*/
// break can stop a loop one a certain condtion
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("its break");
    break;
  }
  console.log(i);
}
// contiune just jump that condition
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("its continue");
    continue;
  }
  console.log(i);
}
