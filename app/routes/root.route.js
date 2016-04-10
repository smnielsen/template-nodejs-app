'use strict';

export default function(req, res, next) {
  // Send strings
  //res.send('Hello world');

  // Send json objects
  res.json({ status: 200, message: 'Hello world' });

  // Set status
  //res.status(500).send("Something went wrong");
}
