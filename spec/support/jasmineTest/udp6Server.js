var ipc=require('../../../node-ipc');

/***************************************\
 * 
 * Since there is no client relationship
 * with UDP sockets sockets are not kept 
 * open.
 * 
 * This means the order sockets are opened
 * is important.
 * 
 * Start World first. Then you can start 
 * hello or goodbye in any order you
 * choose.
 * 
 ***************************************/

ipc.config.id   = 'udp6Server';
ipc.config.retry= 1500;

ipc.serveNet(
    '::1',
    'udp6',
    function(){
        
        ipc.server.on(
            'message',
            function(data,socket){
                
                ipc.server.emit(
                    socket,
                    'message',
                    {
                        id      : ipc.config.id,
                        message : 'I am UDP6 server!'
                        
                    }
                );

            }
        );
       
    }
);


ipc.server.start();