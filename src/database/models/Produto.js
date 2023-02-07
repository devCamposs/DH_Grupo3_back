const { sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "Produto",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
      },
      categoria: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
      modelo: {
        type: DataTypes.STRING,
        notNull: true,
      },
      descricao: {
        type: DataTypes.STRING,
        notNull: true,
      },
      preco: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    },
    {
      tableName: "produtos",
      underscored: true,
      timestamps: false,
    }
  )
  Produto.associate = function (models) {
    Produto.belongsTo(models.CategoriaProduto, {
      as: "CategoriaProduto",
      foreignKey: "categoria",
    }),
    Produto.hasMany(models.Cores, {
      as: "cores",
      foreignKey: "produto_id"
    }
      ),
      Produto.belongsToMany(models.Pedido, {
        as: "ProdutosPedidos",
        through: "produtos_pedidos",
        foreignKey: "produto_id",
        otherKey: "pedido_id", 
      })
  }
  return Produto;
};
