test('test custom code --- isJson', () => {
	const goodJson =
		'{"testNum": 55, "testList": [1, 2, 3], "testStr": "Hello World"}';
	const badJson = '{fghjdvb}';
	const emptyStr = '';

	expect(isJson(goodJson)).toBe(true);
	expect(isJson(badJson)).toBe(false);
	expect(isJson(emptyStr)).toBe(false);
});

function isJson(input: string): boolean {
	try {
		const parsedJson = JSON.parse(input);
		return typeof parsedJson === 'object';
	} catch (error) {
		return false;
	}
}
