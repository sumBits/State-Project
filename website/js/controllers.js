//note that this code is like a private class
//it doesnt grab from any other code but other code grabs from this

//update now it grabs from directives because nothing uses directives but controllers i think
//ill have to check but it doesnt matter it will work (maybe) either way
var webctrl = angular.module('app.controllers', ['app.controllers.directives'])

webctrl.controller('homeCtrl', function () {

})

webctrl.controller('acountCtrl', function () {

})

webctrl.controller('signupCtrl', function () {

})
//this controller is not directly linked to a webpage
//this way it is accessable by any element
// to use the controller in a element do <(element) ng-controller="animationCtrl">
webctrl.controller('animationCtrl', function () {

});
