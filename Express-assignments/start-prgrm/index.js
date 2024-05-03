
const express = require('express');
const http = require('http');
const employeeData = require('./Modules/EmpData');
const empRoutes=require('./Routes/router');

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
app.use('/',empRoutes);

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});