describe('login page ,not angular page',function(){
	beforeEach(function () {
		jasmine.getFixtures().fixturesPath = '/page/';
	});
	beforeEach(function () {
		jasmine.getFixtures().load('login.html');
		jasmine.Ajax.install();
	});
	// it('just check view load', function () {
	// 	expect($('#container').length).toBe(1);
	// });
	afterEach(function () {
		jasmine.Ajax.uninstall();
	});
});