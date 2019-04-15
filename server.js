const express = require('express');
const knex = require('knex');

const server = express();
const db = knex(dbconfig.development);

const dbconfig = require('./knexfile');




server.use(express.json());

// Post Request

server.post('/name', async (req, res) => {

    const name = req.body;

    if (name.name) {

        const posted = await db('name').insert(name);


        
        res.status(201).json(posted);
    } else {
       
        res.status(400).json({ message: 'need a name' })
    }

});


// Get Req

server.get('/name', (req, res) => {
    db('name')
       
    .then(name => res.json(name))
       
        .namech(err => { res.status(500).json({ message: 'Cannot Find name' }) })
});

// Delete Part

server.delete('/name/:id', (req, res) => {
    
    const { id } = req.params;
    
    db('name').where('id', id).del()
    
    .then(ids => { res.status(201).json(ids) })
    
    .namech(err => { res.status(404).json({ message: "Error Cannot Delete" }) })
});

module.exports = server; 