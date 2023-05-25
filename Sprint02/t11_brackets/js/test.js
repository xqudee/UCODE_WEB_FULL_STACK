describe('checkBrackets', () => {

    describe('Incorrect', () => {
        
        it('should return -1 for NaN input', () => {
            assert.equal(checkBrackets(NaN), -1);
        });

        it('should return -1 for non-string input', () => {
            assert.equal(checkBrackets(123), -1);
        });

        it('should return -1 for null input', () => {
            assert.equal(checkBrackets(null), -1);
        });

        it('should return -1 for a string without brackets', () => {
            assert.equal(checkBrackets('abc'), -1);
        });

        it('should return -1 for a string without \'()\' brackets', () => {
            assert.equal(checkBrackets('[]'), -1);
        });

        it('should return -1 for a undefined input', () => {
            assert.equal(checkBrackets(), -1);
        });

    });

    describe('Correct', () => {

        it('(()()))', () => {
            assert.equal(checkBrackets('(()()))'), 1);
        });

        it(')(', () => {
            assert.equal(checkBrackets(')('), 2);
        });

        it('1)()(())2(()', () => {
            assert.equal(checkBrackets('1)()(())2(()'), 2);
        });

        it('))()(((', () => {
            assert.equal(checkBrackets('))()((('), 5);
        });

        it('(()))', () => {
            assert.equal(checkBrackets('(())'), 0);
        });

        it("()sda()(())1((2)(((((((", function() {
            assert.equal(checkBrackets('()sda()(())1((2)((((((('), 8);
        });

        it('f()(((d)))', () => {
            assert.equal(checkBrackets('f()(((d))))'), 1);
        });

        it('{g1((( ))((d)', () => {
            assert.equal(checkBrackets('{g1((( ))((d)'), 2);
        });

        it('(()()((()j)))))', () => {
            assert.equal(checkBrackets('(()()((()j)))))'), 2);
        });

        it('d))()(', () => {
            assert.equal(checkBrackets('d))()('), 3);
        });

        it('(()()())', () => {
            assert.equal(checkBrackets('(()()())'), 0);
        });
    });

});