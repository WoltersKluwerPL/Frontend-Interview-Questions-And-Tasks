(function () {
  'use strict';

  angular.module('APP', [])
    .factory('UserService', UserService);

  function UserService () {
    var userList = [
      {
        id: '1',
        name: 'Jane',
        role: 'Designer'
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer'
      },
      {
        id: '3',
        name: 'Jim',
        role: 'Developer'
      },
      {
        id: '4',
        name: 'Bill',
        role: 'Designer'
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
