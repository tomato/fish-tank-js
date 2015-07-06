'use strict';

export default [
  {
    className: 'row',
    fieldGroup: [
      {
        className: 'col-xs-2',
        type: 'select',
        key: 'name.salutation',
        templateOptions: {
          label: '',
          options: [
            {name:'Mr.'},
            {name:'Mrs.'},
            {name:'Miss'},
            {name:'Ms'},
            {name:'Dr.'},
            {name:'Prof.'},
            {name:'Rev.'},
            {name:'Other'},
            {name:''}
          ]
        }
      },
      {
        className: 'col-xs-5',
        type: 'input',
        key: 'name.first',
        templateOptions: {
          label: 'First Name'
        }
      },
      {
        className: 'col-xs-5',
        type: 'input',
        key: 'name.last',
        templateOptions: {
          label: 'Last Name',
          required: true
        }
      }
    ]
  },
  {
    className: 'row',
    fieldGroup: [
    {
      className: 'col-xs-4',
      type: 'input',
      key: 'phone',
      templateOptions: {
        label: 'Phone'
      }
    },
    {
      className: 'col-xs-4',
      type: 'input',
      key: 'mobile',
      templateOptions: {
        label: 'Mobile'
      }
    },
    {
      className: 'col-xs-4',
      type: 'input',
      key: 'email',
      templateOptions: {
        label: 'Email'
      }
    }]
  },
  {
    template: '<hr /><div><strong>Address:</strong></div>'
  },
  {
    className: 'row',
    fieldGroup: [
      {
        className: 'col-xs-4',
        type: 'textarea',
        key: 'address.streetAddress',
        templateOptions: {
          label: 'Street'
        }
      }]
    },
    {
      className: 'row',
      fieldGroup: [
      {
        className: 'col-xs-4',
        type: 'input',
        key: 'address.town',
        templateOptions: {
          label: 'Town'
        }
      },
      {
        className: 'col-xs-4',
        type: 'input',
        key: 'address.county',
        templateOptions: {
          label: 'County'
        }
      },
      {
        className: 'col-xs-4',
        type: 'input',
        key: 'address.postcode',
        templateOptions: {
          label: 'Postcode'
        }
      }]
    },
    ];
