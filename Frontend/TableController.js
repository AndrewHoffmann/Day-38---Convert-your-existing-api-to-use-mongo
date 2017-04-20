(function() {
    'use strict';

    angular
        .module('node')
        .controller('TableController', function (API) {

        	const vm = this;

            // get all of our data
            let getInfo = API.getData();
            getInfo.then(res=>{
                vm.data = res.data;
            	console.log(res);
            })

            // add person to data when click submitButton
			vm.addItem = function(valid){
                if(valid){
                    const res = Object.assign({},vm.item); // after hit submit, this creates a new Object (person)
                    console.log('res',res); 
                                                            // don't need, but shows new object (kat) created in Console Log
                    let addInfo = API.createData(res);      // we're making addInfo placeholder for ajax call (API.createData)
                    addInfo.then(res=>{                     // waiting, once addInfo has been pushed THEN result will be ...
                        vm.data = res.data;                 // vm.data is now this res(ponse).data
                    })           
				    vm.item = {};                          // clears it out, overwritting object with blank
                }
                else {
                    alert("Form incomplete. Please complete all required fields.");
                }
			}

            // 
            vm.deleteItem = function(id){
                let deleteInfo = API.deleteData(id);
                deleteInfo.then(res=>{
                    vm.data = res.data;
            })

        }});

})();