var app = angular.module('itunes');

app.controller('mainCtrl', function($scope, itunesService){
  $scope.filterOptions = {
        filterText: ''
      };
  $scope.gridOptions = {
      data: 'songData',
      height: '110px',
      filterOptions: $scope.filterOptions,
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Title', displayName: 'Title'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class"image" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'SinglePrice', displayName: 'Single Price'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ]
  };
  $scope.mediaType = "all";
  $scope.showSelectValue = function(selected) {
      $scope.mediaType = selected;
  };
  $scope.getSongData = function() {
    itunesService.getData($scope.artist, $scope.mediaType).then(function(data) {
      $scope.songData = data;
    });
  };

});
