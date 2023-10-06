interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

var student1: Student = {
  firstName: "George",
  lastName: "Eset",
  age: 32,
  location: "Lagos"
};

var student2: Student = {
  firstName: "Joy",
  lastName: "Esetevbe",
  age: 27,
  location: "Ogun",
};

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const th1: HTMLTableHeaderCellElement = row.insertCell(0);
const th2: HTMLTableHeaderCellElement = row.insertCell(1);
th1.innerHTML = ("<b>First Name</b>");
th2.innerHTML = ("<b>Location</b>");
const body: HTMLTableSectionElement = table.createTBody();
studentsList.map((student) => {
  const newRow: HTMLTableRowElement = body.insertRow();
  const firstNameRow: HTMLTableCellElement = newRow.insertCell();
  const locationRow: HTMLTableCellElement= newRow.insertCell();
  firstNameRow.innerHTML = student.firstName;
  locationRow.innerHTML = student.location;
})
