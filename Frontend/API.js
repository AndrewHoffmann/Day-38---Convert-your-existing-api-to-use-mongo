(function() {
    'use strict';

    angular
        .module('node')
        .factory('API', function($http) {

            return {
                getData:() => {                              // will get all users             
                    return $http({
                    method: 'GET',
                    url: "http://localhost:8080/users"     
                    })                                           
                },

                createData:(data)=>{                        // will create(post) a user
                    return $http({
                    method: 'POST',
                    data: data,
                    url: "http://localhost:8080/users"
                    })
                },

                getSingleData:(id)=>{                        // will get 1 user
                    return $http({
                    method: 'GET',
                    url: `http://localhost:8080/users/${id}`
                    })
                },

                deleteData:(id)=>{                          // will delete new user
                    return $http({
                    method: 'DELETE',
                    url: `http://localhost:8080/users/${id}`
                    })
                }
            };

        })
})();