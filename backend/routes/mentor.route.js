import express from 'express';
//import controller file
import * as MentorController from '../controllers/mentor.controller';

// get an instance of express router
const router = express.Router();

router.route('/').get(MentorController.getMentors);
router.route('/').post(MentorController.addMentor);
     

router.route('/:id')
      .get(MentorController.getMentor)
      .delete(MentorController.deleteMentor)
      .put(MentorController.updateMentor);

export default router;