var app=angular.module('myApp', ['ngRoute']);
app.filter("myFilter",function(){
  return function(input,option){
    if(isNaN(option) || option== ""){
      return input;
    }
    else{
    return input.substring(0,option).toUpperCase();
  }
}
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/contactus", {
        templateUrl : "contactus.html"
    })
    .when("/terms", {
        templateUrl : "terms.html"
    })
    .when("/privacy", {
        templateUrl : "privacy.html"
    })
    .when("/interest", {
        redirectTo : "terms.html"
    })
    .when("/", {
        template: '<strong>Some content</strong>'
    })
    .otherwise({
        template: '<strong>Messing content here</strong>'
    })
    
});
app.controller('myCtrl',["$scope","$window","$http","$filter" , function($scope,$window,$http,$filter) {
   $scope.otp=false;
   $scope.isSuccessLogin=false;
   $scope.isOtpVerified=false;
   $scope.doSearch=function(){
    myCtrlService.findEmployeeById($scope.searchEmployee,function(r){
     $scope.name=r.name;
     $scope.age=r.age;
     $scope.address=r.address;
     $scope.department=r.department;
     $scope.isSalAbove7k = parse(r.sal)>7000;
    });
   };
   $scope.angularAlert=function()
  {
          alert($scope.user.name+ " "+ $scope.user.password)
      if($scope.otp && $scope.isSuccessLogin)
      {
        $http.get("otp.json")
       .then(function (response) {
        $scope.otp=response.data.otp;
        if($scope.user.otp==$scope.otp){
          $window.location="menupage.html"
        }
        else{
          alert("Invalid otp");
        }

       });


      }
        else{$http.get("user.json")
       .then(function (response) {
       $scope.userName=response.data.email;
       $scope.password=response.data.password;
       $scope.name=response.data.name;
       if($scope.user.name==$scope.userName && $scope
        .user.password==$scope.password){
         $scope.otp=true;
        $scope.isSuccessLogin=true;

        }
        else{
           $window.alert("invalid userName& password")
        }
       
     })};
     
     } 
     $scope.menu = [
          {
            name : "CAREERS"
          },
           {
              name : "BLOG"
          },
           
           {
              name : "SAFETY TIPS"
          }
           
      ];
       $scope.secondMenu = [
          {
            name : "ABOUT US"
          },
           {
              name : "CONTACT"
          },
        
           {
              name : "TERMS OF USE"
          },
           {
              name : "PRIVACY POLICY"
          },
          
           {
              name : "INTEREST-BASED ADS"
          }
           
      ];
     // $scope.thirdMenu=[
     // {
     //  image: '/images/1.png' 
     // },
     // {
     //  image: '../images/1.webp' 
     // }

     // ];
       $scope.optionMenu = [
          {
            month : "Month",
            code : "IND"

          },
           {
              month : "January",
          },
          {
              month : "February",
          },
          {
              month : "March",
          },
          {
              month : "April",
          },
          {
              month : "May",
          },
          {
              month : "June",
          },
          {
              month : "July",
          },
          {
              month : "Augst",
          },
          {
              month : "Septmber",
          },
          {
              month : "Octobar",
          },
          {
              month : "November",
          },
          {
              month : "December",
          }
      ];
      $scope.dayMenu = [
          {
            day : "Day"
          },
          {
            day : "1"
          },
          {
            day : "2"
          },
          {
            day : "3"
          },
          {
            day : "4"
          },
          {
            day : "5"
          },
          {
            day : "6"
          },{
            day : "7"
          },
          {
            day : "8"
          },
          {
            day : "9"
          },
          {
            day : "10"
          },
          {
            day : "11"
          },
          {
            day : "12"
          },
          {
            day : "13"
          },
          {
            day : "14"
          },

          {
            day : "15"
          },
           
           
      ];
      $scope.yearMenu=[
          {
            year : "Year"
          },
          {
            year : "2018"
          },
          {
            year : "2017"
          },

          {
            year : "2016"
          },
          {
            year : "2015"
          },

          {
            year : "2014"
          },
          {
            year : "2013"
          },
          {
            year : "2012"
          },
          {
            year : "2011"
          },
          {
            year : "2010"
          },
          {
            year : "2009"
          },
          {
            year : "2008"
          },
          {
            year : "2007"
          },
          {
            year : "2006"
          },
          {
            year : "2005"
          },
          {
            year : "2004"
          },
          {
            year : "2003"
          },
          {
            year : "2002"
          },
          {
            year : "2001"
          },
          {
            year : "2000"
          }

      ];

      $scope.tableMenu=
          [
              {
                  "id":"1",
                  "name":"Madhu",
                  "age":"20",
                  "address":"Bangalore",
                  "department":"science",
                  "sal":"2000",
                  "date":"1995-02-07T00:00:00.000Z",
                  "dob":"1983-05-07T08:34:46.000Z",
                  "phno":"1234567456"
              },
              {
                  "id":"2",
                  "name":"Priya",
                  "age":"21",
                  "address":"Mumbai",
                  "department":"Space",
                  "sal":"3000",
                  "date":"1997-02-08T00:00:00.000Z",
                  "dob":"1983-05-09T08:24:46.000Z",
                  "phno":"9678677774"
              },
              {
                  "id":"3",
                  "name":"Priyadarshini",
                  "age":"22",
                  "address":"Chennai",
                  "department":"Mars",
                  "sal":"4000",
                  "date":"1993-03-03T00:00:00.000Z",
                  "dob":"1983-06-05T08:14:46.000Z",
                  "phno":"8736545678"
              },
              {
                  "id":"4",
                  "name":"Liza",
                  "age":"23",
                  "address":"Hybd",
                  "department":"sap",
                  "sal":"5000",
                  "date":"1992-02-01T00:00:00.000Z",
                  "dob":"1885-07-02T08:32:46.000Z",
                  "phno":"8745678932"
              },
               {
                  "id":"5",
                  "name":"Lima",
                  "age":"24",
                  "address":"Goa",
                  "department":"vlsi",
                  "sal":"6000",
                  "date":"1989-09-02T00:00:00.000Z",
                  "dob":"1982-01-05T08:14:46.000Z",
                  "phno":"2445464679"
              },
               {
                  "id":"6",
                  "name":"Snigdha",
                  "age":"25",
                  "address":"Dkl",
                  "department":"ui",
                  "sal":"7000",
                  "date":"1875-12-05T00:00:00.000Z",
                  "dob":"1730-11-15T08:94:46.000Z",
                  "phno":"6578698970"
              },
               {
                  "id":"7",
                  "name":"tapaswini",
                  "age":"26",
                  "address":"puri",
                  "department":"testing",
                  "sal":"8000",
                  "date":"1775-13-09T00:00:00.000Z",
                  "dob":"1930-12-16T08:94:32.000Z",
                  "phno":"9787767675"
              },
               {
                  "id":"8",
                  "name":"leman",
                  "age":"27",
                  "address":"Hybd",
                  "department":"sap",
                  "sal":"9000",
                  "date":"1895-15-01T00:00:00.000Z",
                  "dob":"2006-19-17T08:84:96.000Z",
                  "phno":"8745678932"
              },
               {
                  "id":"9",
                  "name":"laila",
                  "age":"28",
                  "address":"Hybd",
                  "department":"sap",
                  "sal":"10000",
                  "date":"2008-19-09T00:00:00.000Z",
                  "dob":"1830-18-19T08:54:26.000Z",
                  "phno":"8745678932"
              },
               {
                  "id":"10",
                  "name":"Limka",
                  "age":"29",
                  "address":"Hybd",
                  "department":"sap",
                  "sal":"11000",
                  "date":"1575-15-06T00:00:00.000Z",
                  "dob":"1930-10-10T08:24:86.000Z",
                  "phno":"8745678932"
              }
          ];
      
}]);

