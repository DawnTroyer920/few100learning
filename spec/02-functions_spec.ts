import { formatName } from "./utils";
import * as _ from 'lodash';
describe('funtions', () => {
    describe('syntax for creating them', () => {
        it('declaring them', () => {
            //Named function
            function add(a: number, b: number) {
                return a + b;
            }
            expect(add(3, 3)).toBe(6);

            //Anonymous functions
            // -- an anonymous function that I immediately invoke
            expect((function (a, b) { return a / b; })(10, 5)).toBe(2);

            const multiply = function (a: number, b: number) { return a * b; }
            expect(multiply(3, 3)).toBe(9);

            const divide = (a: number, b: number) => a / b;
            expect(divide(10, 2)).toBe(5);

            const logIt = (msg: string) => {
                msg = msg.toUpperCase();
                console.log(msg);
                return true;
            }
            logIt('Fun with functions');

        });
        describe('higher order functions', () => {
            // a higher order function is a function that takes as an argument one or more functions and/or returns a function
            it('first example', () => {

                function formatName(first: string, last: string) {
                    return `${last}, ${first}`;
                }
            });
        });

        it('a higher-order function version ', () => {

            function tagMaker(tag: string) {
                return (content: string) => `<${tag}>${content}</${tag}>`
            }

            const h1Maker = tagMaker('h1');
            const pMaker = tagMaker('p');

            expect(h1Maker('Big!')).toBe('<h1>Big!</h1>');
            expect(pMaker('small')).toBe('<p>small</p>');
        });


        it('you could try oop', () => {

            class ElementMaker {
                tag: string;
                constructor(tag: string) {
                    this.tag = tag;
                }

                make(content: string) {
                    return `<${this.tag}>${content}</${this.tag}>`;
                }
            }

            const h1Maker = new ElementMaker('h1');

            expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
            expect(h1Maker.make('Big!')).toBe('<h1>Big!</h1>');
        });


    });
});