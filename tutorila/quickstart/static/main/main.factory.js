angular.module('djangular').factory('posts', ['$http', "$location", function($http, $location) {
    var posts = {}

    var url = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/posts/";

    posts.get = function(){
        return $http({
            method: "get",
            url: url,
        })
    }

    posts.post = function(){

    }

    return posts;
}]);
