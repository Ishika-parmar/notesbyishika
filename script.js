// Select the button and dropdown
const semesterBtn = document.getElementById("semesterBtn");
const semesterList = document.getElementById("semesterList");

// Toggle dropdown on button click
semesterBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // prevent body click from immediately hiding
    if (semesterList.style.display === "block") {
        semesterList.style.display = "none";
    } else {
        semesterList.style.display = "block";
    }
});

// Hide dropdown if click anywhere outside
document.body.addEventListener("click", () => {
    semesterList.style.display = "none";
});

// Toggle subjects for each semester
const semesterItems = document.querySelectorAll(".semester-item");

semesterItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();

        const subjId = item.getAttribute("data-subjects");
        const subjectDiv = document.getElementById(subjId);

        // Hide all other subject lists
        document.querySelectorAll(".subject-list").forEach(div => {
            if(div !== subjectDiv) div.style.display = "none";
        });

        // Toggle current subject list
        subjectDiv.style.display = subjectDiv.style.display === "block" ? "none" : "block";
    });
});

// Hide dropdowns and subjects when clicking outside
document.body.addEventListener("click", () => {
    semesterList.style.display = "none";
    document.querySelectorAll(".subject-list").forEach(div => div.style.display = "none");
});

function toggleList(id) {
    var list = document.getElementById(id);

    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}


function showNotes(subject) {

    const notesBox = document.getElementById("notesBox");
    const title = document.getElementById("notesTitle");
    const list = document.getElementById("notesList");

    notesBox.style.display = "block";
    list.innerHTML = "";

    const subjects = {
        ot: "Optimization Techniques",
        ai: "Fundamentals of Artificial Intelligence",
        ml: "Machine Learning Essentials",
        iwp: "Internet & Web Programming",
        python: "Python Programming"
    };

    title.innerText = subjects[subject] + " – Units";

    for (let i = 1; i <= 7; i++) {
        const li = document.createElement("li");
        li.innerHTML = `Unit ${i}
            <a href="https://drive.google.com/file/d/YOUR_PDF_LINK/view" target="_blank">
                Open PDF
            </a>`;
        list.appendChild(li);
    }
}
function showNotes(subject) {
    const notesBox = document.getElementById("notesBox");
    const title = document.getElementById("notesTitle");
    const list = document.getElementById("notesList");

    notesBox.style.display = "block"; // show the notes block
    list.innerHTML = ""; // clear previous notes

    // All subjects for semesters 3, 4, 5, 6
    const subjects = {
        // Semester 3
        constitution: "Indian Constitution",
        digital: "Digital Fundamentals",
        ds: "Data Structures",
        dbms: "Database Management System",
        stats: "Probability & Statistics",

        // Semester 4
        os: "Operating System",
        oop: "Object Oriented Programming",
        cn: "Data Communication & Networks",
        ee: "Engineering Economics",
        dmgt: "Discrete Mathematics & Graph Theory",

        // Semester 5
        ot: "Optimization Techniques",
        ai: "Fundamentals of Artificial Intelligence",
        ml: "Machine Learning Essentials",
        iwp: "Internet & Web Programming",
        python: "Python Programming",

        // Semester 6
        ds: "Data Security",
        ip: "Image Processing",
        pa: "Predictive Analytics",
        robotics: "Introduction to Robotics",
        devops: "Agile Software Development & DevOps"
    };

    // Set the title for the clicked subject
    title.innerText = subjects[subject] + " – Units";

    // Add 7 units for each subject
    for (let i = 1; i <= 7; i++) {
        const li = document.createElement("li");
        li.innerHTML = `Unit ${i} 
            <a href="https://drive.google.com/file/d/YOUR_PDF_LINK/view" target="_blank">
                Open PDF
            </a>`;
        list.appendChild(li);
    }

    // Scroll to the notes block
    notesBox.scrollIntoView({ behavior: "smooth" });
}