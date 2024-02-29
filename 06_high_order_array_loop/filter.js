const arr=[1,2,3,4,5,6,7,8,9,10];

const num=arr.filter((val)=> {
    return (val<5)}
    );
// console.log(num); //[ 1, 2, 3, 4 ]

const book=[
    {
        title:'book one',
        genre:"history",
        publish:1992,
        edition:2023,
    },
    {
        title:'book two',
        genre:"science",
        publish:1993,
        edition:2022,
    },
    {
        title:'book three',
        genre:"science",
        publish:1989,
        edition:2020,
    },
    {
        title:'book four',
        genre:"science",
        publish:1998,
        edition:2024,
    },
    {
        title:'book four',
        genre:"Mathmatics",
        publish:1990,
        edition:2024,
    }
];

const userBook=book.filter((bk)=> bk.edition<=2023 && bk.genre==="science")
// console.log(userBook);
const b1=book.filter((b)=>{
    return b.title ==='book one';
})
console.log(b1);  // [  { title: 'book one', genre: 'history', publish: 1992, edition: 2023 }]
    
  
