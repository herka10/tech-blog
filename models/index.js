const User = require('./User');
const Blogs = require('./Blog');
const Comments = require('./Comment')

User.hasMany(Blogs, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogs.belongsTo(User, {
  foreignKey: 'user_id'
});

Blogs.hasMany(Comments, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
})

Comments.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

module.exports = { User, Blogs, Comments };
