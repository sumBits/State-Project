//note that this code is like a private class
//it doesnt grab from any other code but other code grabs from this

//update now it grabs from directives because nothing uses directives but controllers i think
//ill have to check but it doesnt matter it will work (maybe) either way
angular.module('app.controllers', ['firebase'])

    .controller('fourofourCtrl', function () {

    })

    .controller('homeCtrl', function () {

    })

    .controller('accountCtrl', function () {

    })

    .controller('signupCtrl', function ($scope, $state) {
        //connects to database
        //var ref = new Firebase("https://sumbits-scroller.firebaseio.com/");
        //var sync = $firebase(ref);

        $scope.homeGo = function () {
            $state.go('home')
        };
        $scope.changeThemee = function () {
            $scope.changeTheme = 'test'
        };
        //scopes the page to find createAccount
        //creates account
        $scope.createAccount = function (usn, em, pwd) {
            //check for username existance here

            //creates cookie with username
            //put('User_Name_Cookie', usn);
            //
            ////random generate a key here
            //function Random_Gen_Key(key_length) {
            //
            //    var user_key = null;
            //
            //    for (i = 0, key_length, i++) {
            //       user_key += randomnumberthing;
            //    }
            //}
            //
            //var User_Data = {
            //    'Username': usn,
            //    'secret': user_key
            //};
            //put(Key, User_Data);

            // //creates account in firebase
            // //allowed to edit data stuff
            // fireBaseData.ref().createUser({
            //     email: em,
            //     password: pwd
            // }, function (error) {
            //     if (error == null) {
            //         console.log("User created successfully.");
            //         loginFunction(em, pwd);
            //     } else {
            //         console.log("Error creating user: ", error);
            //     }
            // });
        };


    })
//this controller is not directly linked to a webpage
//this way it is accessable by any element
// to use the controller in a element do <(element) ng-controller="animationCtrl">
    .controller('animationCtrl', function () {

    });
