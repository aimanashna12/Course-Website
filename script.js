let navbar = document.querySelector(".navbar");

document.querySelector("#menubtn").onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

const navbarLinks = document.querySelectorAll('.navbar .tag');

navbarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 
            
        const targetId = this.getAttribute('href'); 
            
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop-9*parseFloat(getComputedStyle(document.documentElement).fontSize),
                behavior: "smooth"
            });
        }
    });
});

const courses = [
    {
        assignments: {
            daywise: [
                {day: "DAY 1",desc:"Data types and Variables",about:"Learn about Fundamental datatypes, Variables and constants and their scope in C language"},
                {day: "DAY 2",desc:"Conditional Statements",about:"Learn about writing conditional statements: if, else, else-if, nested if-else statements"},
                {day: "DAY 3",desc:"Loops",about:"Learn about for, while and do while loops along with continue and break statements. Also includes nested loops"},
                {day: "DAY 4",desc:"Functions ",about:"Learn how to declare and define functions, their return values and function prototypes"},
                {day: "DAY 5",desc:"Arrays and Pointers",about:"Learn about declaring and accessing 1D and 2D arrays.Also includes Pointers and their arithmetic"},
                {day: "DAY 6",desc:"Strings",about:"Learn about strings,string-handling functions,string input/output operations and working with character arrays"},
                {day: "DAY 7",desc:"File Handling",about:"Learn about File input/output operations, error handling during file operations and file handling functions"},
                {day: "DAY 8",desc:"Structures and Unions",about:"Learn about nested structures,structure members,arrays of structures,unions and difference between them"},
                {day: "DAY 9",desc:"Dynamic Memory Allocation",about:"Learn about dynamic memory allocation using malloc(),calloc(),realloc(),releasing memory using free()"},
                {day: "DAY 10",desc:"Advanced Topics ",about:"Learn about Preprocessor directives and macros,Enumerations and typedefs ,Bit manipulation and bitwise operators"},

            ],
            weekwise: [
                {day: "WEEK 1",desc:"Data types and Variables + Conditional Statements + Loops",about:"Learn about Fundamental datatypes, Variables, and constants and their scope in C language. Following that, delve into writing conditional statements like if, else, else-if, and nested if-else statements. Finally, explore for, while, and do while loops alongside continue and break statements, including nested loops"},
                {day: "WEEK 2",desc:"Functions + Arrays and Pointers + Strings",about:"Learn how to declare and define functions, their return values, and function prototypes. Afterwards, delve into strings and string-handling functions, including string input/output operations and working with character arrays. Lastly, revisit the concepts of strings, string-handling functions, string input/output operations, and working with character arrays to solidify your understanding"},
                {day: "WEEK 3",desc:"File Handling + Structures and Unions",about: "Learn about File input/output operations and error handling during file operations, as well as file handling functions. Following that, explore nested structures, structure members, arrays of structures, and unions, distinguishing between them."},
                {day: "WEEK 4",desc:"Dynamic Memory Allocation + Advanced Topics",about: "Learn about dynamic memory allocation using malloc(), calloc(), realloc(), and releasing memory using free(). Then, delve into Preprocessor directives and macros, Enumerations, and typedefs. Finally, explore Bit manipulation and bitwise operators to enhance your understanding of low-level data manipulation."}
            ],
        }
    },
];
function viewAssignments(viewType) {
    const coursesContainer = document.getElementById("coursesContainer");
    coursesContainer.innerHTML = "";

    courses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course");
        const assignments = viewType === "day" ? course.assignments.daywise : course.assignments.weekwise;
        const navbar1 = document.createElement("nav");
        navbar1.setAttribute("class","navbar");
        navbar1.setAttribute("id","nav");
        assignments.forEach(assignment => {
            const days= document.createElement("div");
            days.setAttribute("class","tag2");
            days.setAttribute("id",assignment.day);
            days.textContent=assignment.day;
            days.addEventListener("click", () => {
                const targetElement = document.getElementById(assignment.day);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop-10*parseFloat(getComputedStyle(document.documentElement).fontSize),
                        behavior: 'smooth'
                    });
                }
            });
            navbar1.appendChild(days);
            const assignmentElement = document.createElement("div");
            viewType=== "day" ? assignmentElement.setAttribute("class","crsboxd") : assignmentElement.setAttribute("class","crsboxw");
            assignmentElement.setAttribute("id",assignment.day);
            const coursecontent1 =document.createElement("h3");
            coursecontent1.setAttribute("class","coursehead");
            coursecontent1.textContent=assignment.day;
            assignmentElement.appendChild(coursecontent1);
            const coursecontent2 =document.createElement("h4");
            viewType=== "day" ? coursecontent2.setAttribute("class","aboutcoursed") : coursecontent2.setAttribute("class","aboutcoursew");
            coursecontent2.textContent=assignment.desc;
            assignmentElement.appendChild(coursecontent2);
            const coursecontenta =document.createElement("p");
            viewType=== "day" ? coursecontenta.setAttribute("class","aboutcourse2d") : coursecontenta.setAttribute("class","aboutcourse2w");
            coursecontenta.textContent=assignment.about;
            assignmentElement.appendChild(coursecontenta);
            const coursecontent3 =document.createElement("button");
            coursecontent3.setAttribute("class","learnd");
            coursecontent3.textContent= "Learn NOW";
            assignmentElement.appendChild(coursecontent3);
            const coursecontent4 =document.createElement("button");
            coursecontent4.setAttribute("class","learnd");
            coursecontent4.textContent= "Attempt Quiz";
            assignmentElement.appendChild(coursecontent4);
            courseElement.appendChild(assignmentElement);
        });
        courseElement.appendChild(navbar1);
        coursesContainer.appendChild(courseElement);
    });

    coursesContainer.classList.remove("hidden");
}