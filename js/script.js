function MainCtrl() {}
function NavCtrl($scope) {
  $scope.nav = [
    {name:'Blog',link:'#'}, 
    {name:'Contact',link:'#'}
  ];
}
function ContentCtrl($scope, $http) {
  $http.get('./content/article.json').success(function(data) {
    console.log(data);
    $scope.article = data;
  });
}