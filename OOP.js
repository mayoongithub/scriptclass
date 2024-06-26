console.log("starting");
console.log(this);
console.log(this.screen);







class students{
    constructor(){
      this.name = name,
        this.dept = dept, 
        this.age = age 
    }
};

let firstStudent = {
    name: "john",
    dept: "Astrology",
    age:  "19",
    present(){
        console.log(`${this.name}is present`);

    },

};
    let query = "name"
    console.log(firstStudent[query]);


let secondStudent = {
        name : "jeo",
        dept : "Mechatronics",
        age  : "20",
        absent(){
            console.log(`${this.name} is absent`);

        },
};
console.log(secondStudent["dept"]);
    

let thirdStudent = {
        name :  "clay",
        dept : "anthropology",
        age  : "17",
        absent(){
            console.log(`${this.name} is absent `)
        }
     };
     console.log(thirdStudent["dept"]);
     
