//for of loop 
//it apply on array and Map and String but not on Objects
const arr=[1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}

const Name=["anurag","ashutosh",'hemant','anand']
for(let n of Name){
    // console.log(n);
}

//forof on string
const greeting="Hello Anurag How Are You"
for (const g of greeting) {
    // if(g==" ")
    // {
    //     continue
    // }
    // console.log(g);
    
}

// fo of on Map..................
const map =new Map();
map.set(1,'one');
map.set(2,2)
map.set('three','three')
map.set('four','four')

for (const [k,v] of map) {
    console.log(k,v);
}