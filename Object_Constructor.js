function Student(firstname, lastname, age, cgpa, university){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.cgpa = cgpa;
    this.university = university;

    this.fullname = function(){
        return this.firstname + " " + this.lastname;
    }

    this.display = function(){
        document.write("Name :: ", this.fullname(), "<br>");
        document.write("Age :: ", this.age, "<br>");
        document.write("CGPA :: ", this.cgpa, "<br>");
        document.write("University :: ", this.university, "<br>");
    }
}

var std1 = new Student("Ar", "Anik", 14, 3.57, "UAP");
std1.id = "18101073";

var std2 = new Student("Osman", "Goni", 18, 3.58, "USA");
var std3 = new Student("Jonny", "Dept", 30, 3.18, "NSU");

document.write(std1.firstname," ", std1.lastname, " ", std1.age, " ", std1.cgpa, " ", std1.university, " ", std1.id, "<br>");
document.write("Full Name : ", std1.fullname(), "<br>");

std2.display();
std3.display();
