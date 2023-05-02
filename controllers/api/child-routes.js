const router = require('express').Router();
//Class name of Child gets imported here
const { Child } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newChild = await Child.create({
            //Child class attributes go in here
        });

        res.status(200).json(newChild);
    }   catch(err) {
        res.status(404).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        //Class name of Child goes here
        const childData = await Child.destroy({
            //Child class attributes go in here
            where: {
        },
    });

    if (!childData) {
        res.status(404).json({ message: 'This child id does not exist'});
        return;
    }

    res.status(200).json(childData);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;