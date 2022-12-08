const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const ProdutoPedido = sequelize.define(
        "ProdutoPedido",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                notNull: true,
            },
            produtos_id: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            pedido_id: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            quantidade: {
                type: DataTypes.INTEGER,
                notNull: true,
            }
        },
        {
            tableName: "Produtos_Pedidos",
            underscored: true,
            timestamps: false,
        },
    );





    return ProdutoPedido
}
