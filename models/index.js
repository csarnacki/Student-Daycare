const User = require('./user');
const Child = require('./child');
const Allergy = require('./allergy');
const ChildAllergy = require('./child_allergy');

// User.hasMany(Child, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Child.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Allergy.belongsTo(Child, {
//     foreignKey: 'child_id',
//     onDelete: 'CASCADE'
// });

// Child.hasMany(Allergy, {
//     foreignKey: 'child_id',
//     onDelete: 'CASCADE'
// });

Child.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Child, { foreignKey: 'user_id' });
Child.belongsToMany(Allergy, { through: ChildAllergy });
Allergy.belongsToMany(Child, { through: ChildAllergy });
ChildAllergy.belongsTo(Child, { foreignKey: 'child_id' });
ChildAllergy.belongsTo(Allergy, { foreignKey: 'allergy_id' });


module.exports = { User, Child, Allergy, ChildAllergy };




