describe('karma unit test',function(){
	beforeEach(module('karma-unit'));
	beforeEach(module('ListApp'));
	describe('test controller', function() {
		var scope,ctrl,httpBackend;
		var mockList = [
			{
				"id":1,
				"title":"angular-demo1",
				"content":"angular unit test1"
			},
			{
				"id":2,
				"title":"angular-demo2",
				"content":"angular unit test2"
			}
		]
		beforeEach(inject(function($rootScope,$controller,$httpBackend) {
			scope = $rootScope.$new();
			ctrl = $controller('appCtrl', {$scope: scope});
			httpBackend = $httpBackend;
			httpBackend.expectGET('/data/list.json').respond({list:mockList});
		}));
		it('scope should be ok.', function() {
			expect(scope.name).toEqual('karma-unit-demo');
		});
		it('scope bind should be ok.', function() {
			scope.name = 'bind text change';
			expect(scope.name).toEqual('bind text change');
		});
		it('scope http get list before should be ok.', function(){
			httpBackend.flush();
			expect(scope.lists.list).toEqual(mockList);
		});
	});
	describe('test service', function() {
		it('should List exists', inject(function(List) {
			expect(List).toBeDefined();
		}));
	});
});