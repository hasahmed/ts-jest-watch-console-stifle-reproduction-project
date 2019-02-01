import express = require('express');
import { Request, Response } from 'express';

const app = express();

app.get('/test', async (req: Request, res: Response) => {
  res.send({OK: true});
});

// @ts-ignore
const port: number|string = process.env.PORT || 3001;

// @ts-ignore
if (require.main === module) {
  app.listen(port, () => {
    console.log('Server listening on ' + port);
  })
}

export default app;
