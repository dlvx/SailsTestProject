/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res){

		var userId = req.session.passport.user;

		var name =  req.body.name;
    var price = req.body.price;


    Product.create({
      name: name,
      price: price,
      owner: userId
    }).exec(function(err, post){
      console.log('working', post, err);
      res.status(200).end();
    });

	},

	myProducts: function(req, res){
		var userId = req.session.passport.user;
		// if(userId)
    Product.find({owner: userId}, function(err, products){
      res.json(products);
    })
  }
};
