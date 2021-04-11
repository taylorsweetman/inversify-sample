/**
 * unit tests
 *
 * @group test-the-test
 */

import { isJson } from './functions';

test('test custom code -- isJson', () => {
	const goodJson =
		'{"testInt": 55, "testList": [1, 2, 3], "testStr": "Hello World"}';
	const badJson = '{fghjdvb}';
	const emptyStr = '';

	expect(isJson(goodJson)).toBe(true);
	expect(isJson(badJson)).toBe(false);
	expect(isJson(emptyStr)).toBe(false);
});
