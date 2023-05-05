const sequelize = require('../config/connection');
const { User, Child, Allergy } = require('../models');

//Importing from JSON data files
const userData = require('./userData.json');
const childData = require('./childData.json');
const allergyData = require('./allergyData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    }),
    await Child.bulkCreate(childData, {
        individualHooks: true,
        returning: true,
    }),
    await Allergy.bulkCreate(allergyData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();