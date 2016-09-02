"use strict";
require('babel-register');

const http = require('http');
const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use('/static', express.static(__dirname + '/public'));


app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});


const API_KEY = 'DBDBBEE2A6357964A7A3A4D563C273A8';
const MY_STEAM_ID = '76561198267012829';
const STEAM_URL = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key='


app.get('/api/states', function(req,res){
	let userSteamID = req.query.name;
	let url = STEAM_URL+API_KEY+'&steamid='+ userSteamID;
	request(url , function(error, response, body){
		if(error){
	        console.log('Error:', error);
	        res.send(error);
	    }

	    if(response.statusCode !== 200){
	        console.log('Invalid Status Code Returned:', response.statusCode);
	    }

	    body = JSON.parse(body);
		res.send(body.playerstats);
	});
});

app.get('/api/userInfo', function(req,res){
	let userSteamID = req.query.name;
	let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' +API_KEY+'&steamids='+ userSteamID;
	console.log(url);
	request(url,  function(error, response, body){
		if(error){
			console.log('Error:', error);
			res.send(error);
		}
		if(response.statusCode !==200){
			console.log('Invalid Status Code Returned:', response.statusCode);
		}

		body = JSON.parse(body);
		res.send(body.response.players[0]);
	});
});

const server = require('http').createServer(app);
server.listen(app.get('port'),function(){
	console.log("Express server listening on port " + app.get('port'));
});