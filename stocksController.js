// Code goes here

var stockInfoApp = angular.module('stockInfoApp',[]);

stockInfoApp.controller('stocksController',function($scope){
						
  $scope.orderByField = 'availableCash';
  $scope.reverseSort = false;
  
  $scope.stocks = [{
    
    accIntial:'AA',
    accNumber:232,
    availableCash:100,
    stockChange:179909
    },
   {
    accIntial:'AA',
    accNumber:909,
    availableCash:100909,
    stockChange:179909
    },
	{
    accIntial:'BB',
    accNumber:909,
    availableCash:1900909,
    stockChange:179909
    },
    {
    accIntial:'AA',
    accNumber:909,
    availableCash:100909,
    stockChange:100909
    
   }]
	
	$scope.moreStocks = [{
    
    accIntial:'AA',
    accNumber:909,
    availableCash:100909,
    stockChange:179909
    },
   {
    accIntial:'BB',
    accNumber:909,
    availableCash:100909,
    stockChange:179909
    },
	{
    accIntial:'AA',
    accNumber:909,
    availableCash:1900909,
    stockChange:179909
    },
    {
    accIntial:'AA',
    accNumber:909,
    availableCash:100909,
    stockChange:100909
    
   },{
	accIntial:'AB',
    accNumber:609,
    availableCash:110098,
    stockChange:100909
    
   }]
		$scope.loadMore =function(){
						 for(var i=0;i< $scope.moreStocks.length-1;i++){
						$scope.stocks.push($scope.moreStocks[i]);
							 break;
						 }	
		}
	
	
	
});
						
	
	