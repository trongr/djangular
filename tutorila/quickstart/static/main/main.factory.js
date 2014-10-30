angular.module('djangular').factory('posts', ['$http', function($http) {
    var posts = {}
    
    var url = "http://fiction-palace.codio.io:8000/posts/"; // TODO refactor constants module

    posts.get = function(){
        return $http({
            method: "get",
            url: url,
        })     
    }
        
    return posts;
}]);