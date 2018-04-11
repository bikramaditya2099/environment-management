var app=angular.module('myApp', []);
app.controller('myCtrl', function($scope,$window,$http) {
   $scope.otp=true;
   $scope.angularAlert=function()
  {
          alert($scope.user.name+ " "+ $scope.user.password)
      
        $http.get("user.json")
       .then(function (response) {
       $scope.userName=response.data.email;
       $scope.password=response.data.password;
       $scope.name=response.data.name;
       if($scope.user.name==$scope.userName && $scope
        .user.password==$scope.password){
         $window.location="menupage.html"
        }
        else{
           $window.alert("invalid userName& password")
        }
       
     });
     
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
});
