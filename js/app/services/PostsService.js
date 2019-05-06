let API_URL = 'https://hacker-news.firebaseio.com/v0';

function PostsService($http) {
	this.getPost = function (id) {
		return $http.get(API_URL + '/item/' + id + '.json');
    };
    this.getTopStories = function () {
		return $http.get(API_URL + '/topstories.json');
	};
}

angular
	.module('app')
	.service('PostsService', PostsService);