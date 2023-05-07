const User = require('./user');
const Child = require('./child');
const Allergy = require('./allergy');
const ChildAllergy = require('./child_allergy');

User.hasMany(Child, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Child.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Allergy.belongsTo(Child, {
    foreignKey: 'child_id',
    onDelete: 'CASCADE'
});

Child.hasMany(Allergy, {
    foreignKey: 'child_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Child, Allergy, ChildAllergy };




