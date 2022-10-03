const teacherRow = document.querySelector(".row");

const fetchTeachers = fetch('http://localhost:3000/teachers')
    .then(response => response.json()
        .then((data) => {
            const teachers = data;
            teachers.map((teacher) => {
                teacherRow.insertAdjacentHTML('beforeend', teacherCard(teacher))
            })
        }))

const teacherCard = (teacher) => {
    return `
    <div class="col mb-3 col-md-4">
        <div class="card">
            <img src="${teacher.profilePicUrl}" alt="Teacher image" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${teacher.topic}</h5>
                    <p class="card-text">${teacher.desc}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Rate: ${teacher.rate} ${teacher.rateUnit}</li>
                    <li class="list-group-item">Location: ${teacher.location}</li>
                </ul>
                <div class="card-body">
                    <a href class="card-link">Contact</a>
                    <a href class="card-link">Book a session</a>
                </div>
        </div>
    </div>`
}

const fetchStudents = async () => {
    const data = await fetch('http://localhost:3000/students')
    const students = await data.json()
    for (let i = 0; i < students.length; i += 1) {
        renderStudent(students[i]);
    }
}
fetchStudents()

const renderStudent = (student) => {
    const studentCol = createStudentCard(student);
    const studentRow = document.getElementById('student-row');
    studentRow.appendChild(studentCol);
}

const createStudentCard = (student) => {
    const col = document.createElement('div');
    col.className = 'col-md-3';
    const card = document.createElement('div')
    card.className = 'card';
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.innerHTML = student.name;

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body';
    const title = document.createElement('h5')
    title.className = 'card-title'
    title.innerHTML = student.title;
    const cardText = document.createElement('p')
    cardText.className = 'card-text'
    cardText.innerHTML = student.desc;

    const linkButton = document.createElement('a');
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Connect';
    linkButton.appendChild(btn);

    const footer = document.createElement('div');
    footer.className = 'card-footer';
    footer.innerHTML = student.joindedDate;

    cardBody.appendChild(title);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkButton);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    col.appendChild(card);
    card.appendChild(footer);

    return col;
}