const express=require('express')
const router=express.Router();
const { getPeople,createPeople,UpdatePeople,deletePeople }=require('../controllers/people')

// router.get('/',getPeople);

// router.post('/postman',createPeople)

// router.put('/:id',UpdatePeople)

// router.delete('/:id',deletePeople)


router.route('/').get(getPeople)
router.route('/postman').post(createPeople)
router.route('/:id').put(UpdatePeople).delete(deletePeople)

module.exports=router