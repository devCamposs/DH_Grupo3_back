
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
      cor: {
        type: DataTypes.STRING,
        notNull: true,
      },
      imagem: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    
    },
    {
      tableName: "Produtos",
      underscored: true,
      timestamps: false,
    }
  );

  Produto.associate = function (models) {
    Produto.belongsTo(models.CategoriaProduto, {
      as: "CategoriaProduto",
      foreginKey: "categoria_produtos_id",
    });
  };

  Produto.associate = function (models) {
    Produto.belongsToMany(models.Pedido, {
      as: "ProdutosPedidos",

      through: "produtos_pedidos",
      foreginKey: "pedido_id",
      otherKey: "produto_id",
    });
  };

  return Produto;
};

