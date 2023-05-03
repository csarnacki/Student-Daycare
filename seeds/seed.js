const sequelize = require('../config/connection');
const { User, Child, Allergy } = require('../models');

const userData = require('./userData.json');
const childData = require('./childData.json');
const allergyData = require('./allergyData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const users = await User.create(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const child of childData) {
        await Child.create({
            //Generate a random child to display their allergies?
        })
    }

    process.exit(0);
};

seedDatabase();