const { sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Cores = sequelize.define(
    "Cores",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
      },
      cor: {
        type: DataTypes.STRING,
        notNull: true,
      },
      img: {
        type: DataTypes.STRING,
        notNull: true,
      },
      produto_id: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    },
    {
      tableName: "cores",
      underscored: true,
      timestamps: false,
    }
  )
  Cores.associate = function (models) {
    Cores.belongsTo(models.Produto, {
      as: "produto",
      foreignKey: "id",
    })
  }
  return Cores;
}
