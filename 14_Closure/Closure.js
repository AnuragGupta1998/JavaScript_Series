function outer(){
    let name="Anurag"

    function inner(){
        console.log("name is from outer function:- ",name);
    }
    return inner;
}

const one=outer()
one()