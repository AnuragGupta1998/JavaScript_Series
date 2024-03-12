function outer(){
    let Name="anurag";

    function inner(){
        console.log('name access by inner function',Name);
    }
   inner()
   console.log("outer function");
}
outer();
