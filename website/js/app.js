//creates a module (breaks the javascript up into different files also loads other services into the javascript)
var website = angular.module('app', ['app.controllers', 'app.services', 'ui.router']);


website.run(function ($state, $rootScope, $window) {
  //code that runs when website is first opened

  //here will be a function that checks to see if any login cookie exists if not login page
  //otherwise the fall back is the home page (code located at bottom of file)

//  if (/*userlogin status here */ === true) {
//    $state.go('home')
//  } else {
//    $state.go('signup')
//  }
    $state.go('signup')
  //checks if user is online or not
  $rootScope.online = navigator.onLine;
      $window.addEventListener("offline", function () {
        $rootScope.$apply(function() {
          $rootScope.online = false; //it scopes all files for an html thing that says {{online}} it will change {{online}}  to true if online and false if offline
        });                            //cane change message later by changing true or false
      }, false);
      $window.addEventListener("online", function () {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
})

//url location of html files
                        //these are providers in the angular ui https://github.com/angular-ui/ui-router/wiki/URL-Routing

//PLEASE NOTE: this does not mean that index.html has to be the main page!!
//in fact you can make all the pages one page but seprate html files so that the whole website loads on the inital load
//but for our purposes we will not be doing that

website.config(function ($stateProvider, $urlRouterProvider) {
  //calles the stateProvider which is basically a thing that handles the state of the html (what page it is on)

  //the html pages locations are always in template the way you work it is:
  // 1. make the html file
  // 2. make a route in website.config
  // 3. add a controller or existing controller

  //controllers are what run what is on the html pages like buttons logins etc
  //for more info refer to the above link
  $stateProvider
    //state for homepage don't put semicolon until last .state
    .state('home', {
      url: '/home', //this is like www.websitename.com/home
      templateUrl: '/templates/home.html',
      controller: 'homeCtrl'
    })
    .state('signup', {
      url: '/', //bascially like www.websitename.com with nothing at the end
      templateUrl: '/templates/signup.html',
      controller: 'signupCtrl'
    })
    .state('acount', {
      url: '/acount',
      templateUrl: '/templates/acount.html',
      controller: 'acountCtrl'
    })
    .state('404', {
      url:'/whoopsies',
      templateUrl: '/templates/404.html'
    });


  //fallback state
  $urlRouterProvider.otherwise('/whoopsies');
});
