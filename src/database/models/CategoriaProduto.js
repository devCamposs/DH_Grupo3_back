const { sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const CategoriaProduto = sequelize.define(
    "CategoriaProduto",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
      },
      nome: {
        type: DataTypes.STRING,
        notNull: true,
      },
    },
    {
      tableName: "categoria_produtos",
      underscored: true,
      timestamps: false,
    }
  );
  // uma categoria pode ter varios produtos:
  CategoriaProduto.associate = function (models) {
    CategoriaProduto.hasMany(models.Produto, {
      as: "produto",
      foreignKey: "categoria",
    })};
  return CategoriaProduto;
};
