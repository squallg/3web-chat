/*
 * Chat file
 */

var socket = io();
var chat = $('#chatContainer .chat');
var input = $('#messageInputContainer input');
var send = $('#messageInputContainer .send');

/* Show chat message */
socket.on('chat message', function(msg){
    chat.append('<li class="message"><span>' + msg + '</span></li><br />');
});

/* Send button click event */
send.click(sendChatMessage);

/* Enter key press event */
$(window).keydown(function(e) {
    if(e.keyCode == 13) {
        sendChatMessage();
    }
});

/* Send chat message */
function sendChatMessage() {
    var msg = input.val();

    socket.emit('chat message', input.val());
    chat.append('<li class="answer"><span>' + msg + '</span></li>');
    input.val('');
}