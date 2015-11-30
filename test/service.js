describe('karma unit test',function(){
	beforeEach(module('ServiceApp'));
	describe('test service', function() {
		it('should List exists', inject(function(List) {
			expect(List).toBeDefined();
		}));
	});
});