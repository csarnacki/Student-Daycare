// Import the Router constructor from the express package
const router = require("express").Router();
const { Child, Allergy, ChildAllergy } = require("../../models");
// Import our custom authentication middleware
const withAuth = require("../../utils/auth");

// Route for adding a child's allergy
// Test in Insomnia: POST http://localhost:3306/api/allergy
router.post("/", withAuth, async (req, res) => {
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

// Route for updating a child's allergy
// Test in Insomnia: PUT http://localhost:3306/api/allergy/:id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const { allergy_name } = req.body;
    const updatedAllergy = await Allergy.update(
      { name: allergy_name },
      { where: { id: req.params.id } }
    );
    res.status(200).json(updatedAllergy);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for deleting a child's allergy
// Test in Insomnia: DELETE http://localhost:3306/api/allergy/:id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedAllergy = await Allergy.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedAllergy);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
