module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("Post", {
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
    });
  
    return Post;
  };