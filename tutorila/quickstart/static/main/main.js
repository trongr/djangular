angular.module('djangular').controller('MainCtrl', ["$scope", "posts",
    function($scope, posts) {
        $scope.posts = []
        
        posts.get().success(function(data, status, headers, config) {
            $scope.posts = data.results
        }).error(function(data, status, headers, config) {
            console.log(JSON.stringify({
                er: "posts get error",
                data: data,
                status: status,
                headers: headers,
                config: config
            }, 0, 4))
        })
        
        $scope.addpost = function(){
            var newpost = $scope.newpost
            $scope.newpost = ""
            $scope.posts.push(newpost)
        }
    }
]);