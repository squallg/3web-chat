/*
 * Chat controller
 */

module.exports = {
    
    //Page render
    render: function(res) {
		res.render("chat", {title: "chat"});
    },
    
    //Start chat
    start: function(io) {
        io.on('connection', function(socket){
            
            /* Send join chat message */
            socket.broadcast.emit('chat message', 'Server: Un utilisateur a rejoint le chat');

            /*  When a chat message is send */
            socket.on('chat message', function(msg) {
                socket.broadcast.emit('chat message', msg);
            });

            /* When user leave the chat */
            socket.on('disconnect', function() {
                socket.broadcast.emit('chat message', 'Server: Un utilisateur a quitté le chat');
            });
        });
    }
}