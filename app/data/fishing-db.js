import Ember from 'ember';

var db = {

  "islands":[
    {"code":"I1", "name":"island1", "spots":[
    	{"code":"S11", "name":"Spot1.1", "fishCode":[
    		"F1", "F3"
    	]},
    	{"code":"S12", "name":"Spot1.2", "fishCode":[
    		"F1", "F3"
    	]},
    	{"code":"S13", "name":"Spot1.3", "fishCode":[
    		"F1", "F3"
    	]}
    ]},
    {"code":"I2", "name":"island2", "spots":[
    	{"code":"S21", "name":"Spot2.1", "fishCode":[
    		"F1", "F3"
    	]},
    	{"code":"S22", "name":"Spot2.2", "fishCode":[
    		"F1", "F3"
    	]},
    	{"code":"S23", "name":"Spot2.3", "fishCode":[
    		"F1", "F3"
    	]}
    ]},
    {"code":"I3", "name":"island3", "spots":[
    	{"code":"S31", "name":"Spot3.1", "fishCode":[
    		"F1", "F3"
    	]},
    	{"code":"S32", "name":"Spot3.2", "fishCode":[
    		"F1", "F3"
    	]},
    	{"code":"S33", "name":"Spot3.3", "fishCode":[
    		"F1", "F3"
    	]}
    ]},
  ],

  "fishes": [
    {"code": "F1", "name": "fishy 1"},
    {"code": "F2", "name": "fishy 2"},
    {"code": "F3", "name": "fishy 3"}
  ]
}

export default db;