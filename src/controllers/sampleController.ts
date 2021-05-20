import express from 'express';

class Sample {
  sample = (req: express.Request, res: express.Response) => {
    res.json({ status: 'ok' });
  };
}

const SampleController = new Sample();

export default SampleController;
