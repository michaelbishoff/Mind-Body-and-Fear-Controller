/*
Copyright (C) 2015 Electronic Arts Inc.  All rights reserved.
 
This software is solely licensed pursuant to the Hackathon License Agreement,
Available at:  www.eapathfinders.com/license
All other use is strictly prohibited. 
*/

$(document).ready(function () {

	console.log("Document Loaded");

	// INIT..
	conn = new Connection();
	conn.sendMessage({"type": "connect"});
	
    $("#head").on("touchstart", function() {
        var msg = {
            "type": "vibrate",
            "location": "head"
        };
        conn.sendMessage(msg, 0);
    });
    $("#leftUpperArm").on("touchstart", function() {
        var msg = {
            "type": "vibrate",
            "location": "leftUpperArm"
        };
        conn.sendMessage(msg, 0);
    });
    $("#leftLowerArm").on("touchstart", function() {
        var msg = {
            "type": "vibrate",
            "location": "leftLowerArm"
        };
        conn.sendMessage(msg, 0);
    });
    $("#rightUpperArm").on("touchstart", function() {
        var msg = {
            "type": "vibrate",
            "location": "rightUpperArm"
        };
        conn.sendMessage(msg, 0);
    });
    $("#rightLowerArm").on("touchstart", function() {
        var msg = {
            "type": "vibrate",
            "location": "rightLowerArm"
        };
        conn.sendMessage(msg, 0);
    });
    $("#chest").on("touchstart", function() {
        var msg = {
            "type": "vibrate",
            "location": "chest"
        };
        conn.sendMessage(msg, 0);        
    });
    $("#upperLegs").on("touchstart", function() {
        var msg = {
            "type": "vibrate",
            "location": "upperLegs"
        };
        conn.sendMessage(msg, 0);        
    });
    $("#lowerLegs").on("touchstart", function() {
        var msg = {
            "type": "vibrate",
            "location": "lowerLegs"
        };
        conn.sendMessage(msg, 0); 
    });
    
	// Process incoming game messages
//	$(document).on("game_message", function (e, message) {
//		console.log("Received Message: " + JSON.stringify(message));
//		var payload = message.payload;
//		switch (payload.type) {
//			//your code here
//		}
//	});
});

