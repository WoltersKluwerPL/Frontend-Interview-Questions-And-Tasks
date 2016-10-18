(function () {
  'use strict';

  angular.module('APP', [])
    .factory('UserService', UserService);

  function UserService () {
    var userList = [
      {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane'
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
      },
      {
        id: '3',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo'
      },
      {
        id: '4',
        name: 'Bill',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill'
      }
    ];

    return {
      all: all,
      findById: findById
    };

    function all () {
      return userList;
    }

    function findById (id) {
      return userList.find(function (user) {
        return user.id === id;
      });
    }

  }
})();
