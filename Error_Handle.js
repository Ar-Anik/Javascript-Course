// Error Handling -> try, catch, finally, throw
// try handle runtime error not syntax error

try{
    alert("Hello");
    alert(anik);
    // alert("How are you?");
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    alert("How are you?");
}
