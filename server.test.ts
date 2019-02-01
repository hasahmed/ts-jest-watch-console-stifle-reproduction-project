import 'jest';
import * as request from 'supertest';
import app from './server'

const req: request.SuperTest<request.Test> = request(app);

describe('Stifled Console Reproduction With Server Call', () => {
  it('Should display console messages', async () => {
    const res = await req.get('/test');
    console.log('A console message');
  });
});
