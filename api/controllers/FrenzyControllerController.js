/**
 * FrenzyControllerController
 *
 * @description :: Server-side logic for managing Frenzycontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var firebase = require('firebase')
firebase.initializeApp(sails.config.frenzy.config);
module.exports = {
  frenzyController:  function (req, res){
    var rootRef = firebase.database().ref();
    rootRef.once('value').then(function(dataSnapshot) {
      res.json(dataSnapshot.val());
    }).catch(function(err){
        res.json(err);
    });
  }
};
