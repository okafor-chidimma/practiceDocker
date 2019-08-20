
import dotenv from 'dotenv';
dotenv.config();
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const pg = require('pg');
pg.connect('postgres://cgoaynxe:Oel5HImw-4ROsgAF0dsWiT4mNuYaHfw3@raja.db.elephantsql.com:5432/cgoaynxe');
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));