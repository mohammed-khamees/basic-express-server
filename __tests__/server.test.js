'use strict';

const { app } = require('../src/server.js');
const superTest = require('supertest');
const request = superTest(app);

describe('Server', () => {
	it('handle invalid routes', async () => {
		const response = await request.get('/foo');
		expect(response.status).toEqual(404);
	});
	it('handle server errors', async () => {
		const response = await request.get('/person');
		expect(response.status).toEqual(500);
	});
	it('handle working routes', async () => {
		const response = await request.get('/person').query({ name: 'mohammed' });
		expect(response.status).toEqual(200);
		expect(response.body).toEqual({ name: 'mohammed' });
	});
});
