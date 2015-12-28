/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get_user: function(req, res) {
    if ( !req.isAuthenticated() ) return res.forbidden();
    return res.json({user: req.user});
	} // end get_user
};
