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

    describe('various literals', () => {
        it('examples', () => {
            let n1 = 12; //number
            let n2 = 1.3; //still a number
            let n3 = 0xff; //still a number but hex (base 16)
            let n4 = 0b00101; //still a number but binary
            let n5 = 0o744; // octal... who uses this?
            //typescript thing
            const salary = 1_000_000;
        });
    });
    describe('arrays and array literals', () => {
        it('has them', () => {
            const stuff: Array<number | string> = [12, 13];
            stuff[2] = 'tacos';
            expect(stuff[2]).toBe('tacos');

            let food = stuff[2];

        });
        describe('tuples', () => {
            it('a brief introduction TS', () => {
                let warren: [string, string, number, string];
                warren = ['Warren', 'Ellis', 56, 'Musician'];
                let occupation = warren[3];
                let age = warren[2];

            });
        });

    });
});