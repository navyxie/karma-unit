describe('login page ,not angular page',function(){
	beforeEach(function () {
		jasmine.getFixtures().fixturesPath = 'base/app/fixture/';
		jasmine.getFixtures().load('login.html');
	});
	describe('test dom',function(){	
		beforeEach(function () {			
			jasmine.Ajax.install();
		});
		it('just check view load', function () {
			expect($('#container').length).toBe(1);
		});	
		afterEach(function () {
			jasmine.Ajax.uninstall();
		});
	});
	describe('ajax',function(){
		beforeEach(function () {
			jasmine.Ajax.install();
		});
		it('input username and password',function(){
			var spyEvent = spyOnEvent('#username', 'keyup');
			$('#username').val('karma');
			$('#username').trigger('keyup');
			$('#password').val('test');
			$('#password').trigger('keyup');
			expect(spyEvent).toHaveBeenTriggered();
			expect($('#username').val()+$('#password').val()).toBe('karmatest');
			// expect($('#loginBtn')).toHaveClass('btn-success');
		});
		it('do login', function () {
			var result,request;
			$.ajax({
				url:"/data/login.json",
				type:'get',
				dataType:"json",
				success:function(data){
					result = data;
				}
			});
			request = jasmine.Ajax.requests.mostRecent();
			request.respondWith({"status": 200,"responseText": '{"username": "karma", "password": "test"}'});
			expect(request.url).toBe('/data/login.json');
			expect(request.method).toBe('GET');
			expect(result).toEqual({"username": "karma", "password": "test"});
		});
		afterEach(function () {
			jasmine.Ajax.uninstall();
		});
	})
});