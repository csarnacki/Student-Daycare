// Import the Router constructor from the express package
const router = require('express').Router();
const { Child, Allergy } = require('../../models');
// Import our custom authentication middleware
const withAuth = require('/utils/auth');

// Route for adding a child's allergy
router.post('/allergies', withAuth, async (req, res) => {
    try {
      const { allergy_name, child_id } = req.body;
      const newAllergy = await Allergy.create({ name: allergy_name });
      const child = await Child.findByPk(child_id);
      await child.addAllergy(newAllergy);
      res.status(200).json(newAllergy);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
 
