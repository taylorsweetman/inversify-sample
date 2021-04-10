import { sum } from '../src/sum';

test('first test', () => {
	expect(sum(1, 3)).toBe(4);
});

test('second test', () => {
	expect(sum(10, 3)).toBe(13);
});
