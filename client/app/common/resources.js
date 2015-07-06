'use strict';

class Resources{
  constructor($resource){
    this.$resource = $resource;
  }

  GuestResource() {
    return this.$resource('/api/guests/:guestId', {guestId:'@id'});
  }
}

Resources.$inject = ['$resource'];

export default Resources;
