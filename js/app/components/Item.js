let Item = {
	templateUrl: 'views/item.html',
	bindings: {
		id: '='
	},
	controller: function (PostsService) {
		let ctrl = this;
		PostsService
			.getPost(this.id)
			.then(function (response) {
				ctrl.data = response.data;
			})
	},
	controllerAs: 'item'
};

angular
	.module('app')
	.component('item', Item);