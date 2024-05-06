const router = require('express').Router();
const employeeData = require('../Modules/EmpData');
const logger = require('../Modules/LoggerMiddleware');


router.get('/get', logger, (req,res)=>{
    res.send(employeeData);
})
router.post('/add', logger, (req, res) => {
    console.log('data body: ',req.body)
    const newEmployee = req.body;
    employeeData.push(newEmployee);
    res.status(201).json(newEmployee);
});
router.delete('/remove/:id', logger, (req, res) => {
    const id = parseInt(req.params.id);
    const index = employeeData.findIndex(employee => employee.id === id);

    if (index !== -1) {
        const deletedEmployee = employeeData.splice(index, 1)[0];
        res.json(deletedEmployee);
    } else {
        res.status(404).json({ message: `Employee with ID ${id} not found` });
    }
});
module.exports=router;

