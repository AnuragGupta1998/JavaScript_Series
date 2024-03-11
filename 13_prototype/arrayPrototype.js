const myArr=[1,2,3,4,5,6,7,8,9,10]

//Prototype of super parent Object so any array child can access the method
Array.prototype.multiply2=function(){  
    for (const iterator of this) {
        console.log(iterator*2);
        
    }
}

//  myArr.multiply2()

const myArr2=[3,9,1,4,2,9]
// myArr2.multiply2()

const arr3=[12,34,90,88]
arr3.multiply2()