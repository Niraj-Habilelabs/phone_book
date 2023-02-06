function insertNewRecord(data) {
    var table = localStorage.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.yourname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.contact;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.relation;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    localStorage.getElementById("yourname").value = selectedRow.cells[0].innerHTML;
    localStorage.getElementById("contact").value = selectedRow.cells[1].innerHTML;
    localStorage.getElementById("relation").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.yourname;
    selectedRow.cells[1].innerHTML = formData.contact;
    selectedRow.cells[2].innerHTML = formData.relation;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        localStorage.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}