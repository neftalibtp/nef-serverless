'use strict';

var http = require('https'),
    xml2js = require('box-node-sdk');
    
/////////////////////////////////////////////////////////////////////

exports.handler = (event, context, callback) => {
    
    var payload = '{"name": "POC_TEST_' + event.rid + '", "parent": {"id": "1553543585"}}';
    
    const options = {
      hostname: 'api.box.com',
      port: 443,
      path: '/2.0/folders',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer vvuLJkEnlfCSANv1dpJTKxF1svzZJad4',
          'Content-Length': Buffer.byteLength( payload ),
      }
    };
    
    var request = http.request(options, ( res ) => {
        res.setEncoding('utf8');
        
        res.on('data', function( data ) {
            var obj = JSON.parse(data);
            
            const responseSuccess = {
                statusCode: 200,
                body: JSON.stringify({folderId: obj.id})
            };
            
            callback(null, responseSuccess);
        });
    });
    
    request.on('error', (e) => {
        console.error(e);
    });
    
    request.write(payload);
                
    request.end();
    
};
