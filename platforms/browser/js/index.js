/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
            alert("deberia iniciar")
            var YOUR_API_KEY = "kWnj3JHSCtVtvUFHcJUIiALb8gUIPUf4";
            var YOUR_PLACEMENT_LOCATION_INAPP = "inapp";
            var YOUR_PLACEMENT_LOCATION_REWARDED = "video";
            
            var loadbtn = document.getElementById("load_btn"); 
            
            // add AFW Event Listeners
            document.addEventListener('onModuleCached', function(e) {});
            document.addEventListener('onModuleClosed', function(e) {
                // Ad has been closed, cache the next one
                // AppTracker.loadModuleToCache(e.placement); 
            });
            document.addEventListener('onModuleLoaded', function(e) {}); 
            document.addEventListener('onModuleFailed', function(e) {}); 
            
            document.addEventListener('deviceready', function() {
                // Initialize AppFireworks SDK and cache the Add
                AppTracker.startSession(YOUR_API_KEY, true);
                AppTracker.loadModuleToCacheInapp(YOUR_PLACEMENT_LOCATION_INAPP);
                AppTracker.loadModuleToCacheInapp(YOUR_PLACEMENT_LOCATION_VIDEO);
            }, false);  
            
            function loadModuleToCacheInapp()
            {
                AppTracker.loadModuleToCache(YOUR_PLACEMENT_LOCATION_INAPP);
            }
            
            function loadModuleInapp()
            {               
                AppTracker.loadModule(YOUR_PLACEMENT_LOCATION_INAPP);
            }
            
            function loadModuleToCacheRewarded()
            {
                AppTracker.loadModuleToCache(YOUR_PLACEMENT_LOCATION_REWARDED);
            }
            
            function loadModuleRewarded()
            {               
                AppTracker.loadModule(YOUR_PLACEMENT_LOCATION_REWARDED);
            }
           
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
