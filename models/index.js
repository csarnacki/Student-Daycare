const user = require('./user');
const child = require('./child');
const allergy = require('./allergy');

user.hasMany(child, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

child.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

allergy.belongsTo(child, {
    foreignKey: 'child_id',
    onDelete: 'CASCADE'
});

child.hasMany(allergy, {
    foreignKey: 'child_id',
    onDelete: 'CASCADE'
});


module.exports = { user, child, allergy };




