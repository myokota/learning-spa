var 
  configRoutes,
  crud = require( './crud' ),
  makeMongoId = crud.makeMongoId;

configRoutes = function( app, server ) {

  app.get( '/', function ( request, response ) {
    response.redirect( '/spa.html' );
  });
  
  app.all( '/:obj_type/*?', function ( request, response, next ) {
    response.contentType( 'json' );
    if ( objTypeMap[ request.params.obj_type ] ) {
      next();
    }
    else {
      response.send({ error_msg : request.params.obj_type + ' is not a valid object type'});
    }
  });
  
  app.get( '/:obj_type/list', function ( request, response ) {
    crud.read(
      request.params.obj_type,
      {}, {}, 
      function ( map_list ) { response.send( map_list ); }
    );
  });
  
  app.post( '/:obj_type/create', function ( request, response ) {
    crud.construct(
      request.params.obj_type,
      request.body,
      function ( result_map ) { response.send( result_map ); }
    );
  });
  
  app.get( '/:obj_type/read/:id', function ( request, response ) {
    crud.read(
      request.params.obj_type,
      { _id: makeMongoId( request.params.id ), }, 
      {}, 
      function ( map_list ) { response.send( map_list ); }
    );
  });
  
  app.post( '/:obj_type/update/:id', function ( request, response ) {
    crud.update(
      request.params.obj_type,
      { _id: makeMongoId( request.params.id ), }, 
      request.body,
      function ( result_map ) { response.send( result_map ); }
    );
  });
  
  app.get( '/:obj_type/delete/:id', function ( request, response ) {
    crud.destroy(
      request.params.obj_type,
      { _id: makeMongoId( request.params.id ), }, 
      function ( result_map ) { response.send( result_map ); }
    );
  });

};

module.exports = { configRoutes : configRoutes };

dbHnadle.open( function() {
  console.log( '** Connected to MongDB **' );
});

(function ()  {
  var schema_name, schema_path;
  for ( schema_name in objTypeMap ) {
    if ( objTypeMap.hasOwnProperty( schema_name ) ) {
      schema_path = __dirname + '/' + schema_name + '.json';
      loadSchema ( schema_name, schema_path );
    }
  }
}());

