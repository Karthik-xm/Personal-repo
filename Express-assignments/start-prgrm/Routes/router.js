const router = require('express').Router();
const employeeData = require('../Modules/EmpData');

const validate = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== 'secret-key') {
        return res.status(401).send('Unauthorized - Missing or invalid API key');
    }
    next();
}

router.use(validate);

router.get('/get', validate, (req,res)=>{
    res.send(employeeData);
})
router.post('/add', (req, res) => {
    console.log('data body: ',req.body)
    const newEmployee = req.body;
    employeeData.push(newEmployee);
    res.status(201).json(newEmployee);
});
router.delete('/remove/:id', (req, res) => {
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

