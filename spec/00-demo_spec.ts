describe('Writing a basic spec', () => {
    it('should be easy', () => {
        //Given (arrange)
        let firstName = "Dawn",
            lastname = "Troyer";
        // When (act)
        let fullName = lastname + ', ' + firstName;

        //then (assert)
        expect(fullName).toBe('Troyer, Dawn');
    });
});