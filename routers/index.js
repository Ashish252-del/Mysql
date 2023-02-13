
const express = require('express');

const router = express.Router();
const crudApi = require('./controllers/controller')
router.get('/',crudApi.read);
router.post('/',crudApi.create);
router.put('/:id',crudApi.update);
router.delete('/:id',crudApi.del);

module.exports = router;