describe('Variables and constants and stuff', () => {
    describe('Declaring Variables', () => {
        it('using let to create a binding', () => {
            let name;
            name = 'Joe';
            expect(name).toBe('Joe');
        });
        it('some typescript stuff for variables', () => {
            let name: string | number = 'Joe'; // Union type   
            name = 'Joe';
            expect(name).toBe('Joe');

            name = 11;
            expect(name).toBe(11);
        });
        it('declaring constants', () => {
            const PI = 3.1415927;
            const FAVORITE_NUMBERS = [9, 22, 108];
            FAVORITE_NUMBERS[0] = 10;
            const MOVIE = {
                title: "Moby Dick",
                director: "some guy"
            };
            MOVIE.director = "Johnson";
        });
        it('Var is still there but it stinks and should not be used', () => {
            if (true) {
                var name = "fido";  //this is the thing you SHOULD NOT DO!  Use LET instead! or use CONST.
            }
            expect(name).toBe("fido");
        });
    });
    describe('strings', () => {
        it('delimiting', () => {
            let first = 'Joe',
                last = "Schmidt";
            expect("Joe").toBe(first);

            let msg = "She told \"Get Lost!\"";
            let msg2 = 'She told me "Get Lost!"';

            let story = `Chapter 1.
            
It was a dark and stormy night`;
            console.log(story);

            let fullName = `That is ${last}, ${first}`;
            expect(fullName).toBe('That is Schmidt, Joe');

        });
    });
});