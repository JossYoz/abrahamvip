const express = require('express');
const router = express.Router();





router.get('/', (req,res)=>{
    res.render('index.html', {title:'AbrahamVIP'});
 } );

 router.get('/excursiones', (req,res)=>{
    res.render('excursiones.html', {title:'Excursiones'});
 } );

 router.get('/transfers', (req,res)=>{
   res.render('transfers.html', {title:'Transfers'});
} );

 router.get('/instructions', (req,res)=>{
   res.render('instructions.html', {title:'Instrucciones'});
} );

router.get('/form', (req,res)=>{
   res.render('formulario.html', {title:'Form'});
} );

router.get('/contacto', (req,res)=>{
   res.render('contacto.html', {title:'Contacto'});
} );




 module.exports = router;