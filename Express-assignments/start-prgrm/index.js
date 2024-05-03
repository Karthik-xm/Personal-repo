
const express = require('express');
const http = require('http');
const employeeData = require('./Modules/EmpData')

const value =(employeeData) => {
    data = 'Employee Data:<br>';
    employeeData.forEach(employee => {
    data += '<br>ID:'+ `${employee.id}`+'<br>';
    data +='Name: '+`${employee.firstName} ${employee.lastName}`+'<br>';
    data += 'Age:'+ `${employee.age}`;
});
return data;
}

const app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const empData = value(employeeData);

app.get('/', (req, res) => {
    res.send(empData);
});
app.post('/add', (req, res) => {
    console.log('data body: ',req.body)
    const newEmployee = req.body;
    employeeData.push(newEmployee);
    res.status(201).json(newEmployee);
});
app.delete('/remove/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = employeeData.findIndex(employee => employee.id === id);

    if (index !== -1) {
        const deletedEmployee = employeeData.splice(index, 1)[0];
        res.json(deletedEmployee);
    } else {
        res.status(404).json({ message: `Employee with ID ${id} not found` });
    }
});

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});