'use strict';

const Model = require('sequelize').Model;

class <%= name %> extends Model {
  static associate(models) {
    // associations can be defined here
  }
}

module.exports = (sequelize, DataTypes) => {
  <%= name %>.init({
    <% attributes.forEach(function(attribute, index) { %>
      <%= attribute.fieldName %>: DataTypes.<%= attribute.dataFunction ? `${attribute.dataFunction.toUpperCase()}(DataTypes.${attribute.dataType.toUpperCase()})` : attribute.dataValues ? `${attribute.dataType.toUpperCase()}(${attribute.dataValues})` : attribute.dataType.toUpperCase() %>
      <%= (Object.keys(attributes).length - 1) > index ? ',' : '' %>
    <% }) %>
  }, {
    sequelize,
    modelName: '<%= name %>',
    <%= underscored ? 'underscored: true,' : '' %>
  });
  return <%= name %>;
};
