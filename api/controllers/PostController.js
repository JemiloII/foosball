/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = require('waterlock').actions.user({
  open: function (req, res){
  	return res.ok("Open!");
  },
  jwt: function (req, res){
  	return res.ok("Token!");
  }
});