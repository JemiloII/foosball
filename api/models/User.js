/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {
  schema:true,
  attributes: require('waterlock').models.user.attributes({
    
    name:"string",
    wins:"integer",
    losses:"integer",
    ratio:"float",
    elo:"integer",
    matches: {
    	collection: 'matches'
    }
    
  }),
  
  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
