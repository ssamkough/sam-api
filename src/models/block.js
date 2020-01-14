export default (sequelize, DataTypes) => {
  const Block = sequelize.define("Block", {
    name: DataTypes.STRING
  });
  Block.associate = function(models) {};
  return Block;
};
