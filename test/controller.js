describe('karma unit test',function(){
	beforeEach(module('mainApp'));
	describe('test listCtrl controller', function() {
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
		];
		beforeEach(inject(function($rootScope,$controller,$httpBackend) {
			scope = $rootScope.$new();
			ctrl = $controller('listCtrl', {$scope: scope});
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
	describe('test contentCtrl controller', function() {
		var scope,ctrl,httpBackend;
		var mockContent = 
		{
			"title":"angular-demo1",
			"content":"angular unit test1"
		};
		beforeEach(inject(function($rootScope,$controller,$httpBackend,$routeParams) {
			$routeParams.id = 1;
			scope = $rootScope.$new();
			ctrl = $controller('contentCtrl', {$scope: scope});	
			httpBackend = $httpBackend;
			httpBackend.expectGET('/data/detail-1.json').respond(mockContent);
		}));
		it('scope http get list before should be ok.', function(){
			//angular resource return promise ,so result Object contain key promise,resolved. 
			expect(scope.content).not.toEqual(jasmine.objectContaining(mockContent));
		});
		it('scope http get list before should be ok.', function(){
			httpBackend.flush();
			expect(scope.content).toEqual(jasmine.objectContaining(mockContent));
		});
	});
});