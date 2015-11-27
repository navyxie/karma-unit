describe('karma unit test',function(){
	 beforeEach(module('karma-unit'));
	describe('test controller', function() {
		var scope,ctrl;
		beforeEach(inject(function($rootScope,$controller) {
			scope = $rootScope.$new();
			ctrl = $controller('appCtrl', {$scope: scope});
		}));
		it('scope should be ok.', function() {
			expect(scope.name).toEqual('karma-unit-demo');
		});
	});
});