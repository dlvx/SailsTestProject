/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

 connection: 'mariaDBServer',
 tableName: 'product',
 autoPk: false,
 // Enforce model schema in the case of schemaless databases
 //schema: true,

 attributes: {
   id : {
     type: 'integer',
     primaryKey: true,
     autoIncrement: true,
     defaultsTo: 0
   },
   name  : { type: 'string'},
   price     : { type: 'float'},
   owner: {
      model: 'user'
   }
 }
};
