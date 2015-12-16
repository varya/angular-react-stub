export default function ($scope) {
  $scope.menu = {};
  $scope.menu.items = [
    {
      id: 'index',
      link: '/',
      name: 'Index'
    },
    {
      id: 'example',
      link: '/page/example',
      name: 'Example'
    },
    {
      id: 'contacts',
      link: '/page/contacts',
      name: 'Contacts'
    }
  ]
}
