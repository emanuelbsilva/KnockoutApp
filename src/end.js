  // Give extensibility to models and collections
  Collection.extend = Model.extend = Utils.extendClass;
  Collection.inherit = Model.inherit = Utils.inheritClass;

  return KnockoutApp;

});