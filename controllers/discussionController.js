// create the controller and inject Angular's $scope
angular.module('jigglyApp').controller('discussionController', function($scope) {
	console.log('this is the discussion controller');


	$scope.article  = {
		title :'Russia plans to send long-range bombers to the Gulf of Mexico', 
		description : '(CNN) -- Russia plans to send long-range bombers to the Gulf of Mexico in what appears to be Moscow\'s latest provocative maneuver in its increasingly frosty relations with the West. Defense Minister Sergey Shoigu said Wednesday that \"we have to maintain (Russia\'s) military presence in the western Atlantic and eastern Pacific, as well as the Caribbean and the Gulf of Mexico\" -- including sending bombers \"as part of the drills.\" It\'s an argument U.S. officials don\'t seem to be buying. \"We do not see the security environment as warranting such provocative and potentially destabilizing activity,\" a senior Obama administration official said Thursday. U.S. State Department spokeswoman Jen Psaki offered a similar response.',	
		publisher: 'CNN',
		origin_lang:'he' ,
		width: '12',
		sideA :'side a',
		sideB:'side b',
		sideACount:6,
		sideBCount:4,
		neutralCount:4
	}

	$scope.comments = 
	[
		{
			title :'Agree', 
			description : 'would bednifit Russia',	
			publisher: 'Eitan',
			origin_lang:'ru' ,
			width: '4',
			color: 'brown'
		},
		{
			title :'What the hell', 
			description : 'Who russia thinks she is',	
			publisher: 'Eitan',
			origin_lang:'he' ,
			width: '4',
			color: 'red'
		},
		{
			title :'I wonder what is the real reason russia does this insane action', 
			description : 'Probably fuel',	
			publisher: 'Matan',
			origin_lang:'en' ,
			width: '4',
			color: 'brown'
		},
		{
			title :'Any body thinks USA will make a presence there also?', 
			description : 'I think the answer is ngative',	
			publisher: 'Gilad',
			origin_lang:'du' ,
			width: '4',
			color: 'green'
		},
		{
			title :'Any body thinks USA will make a presence there also?', 
			description : 'I think the answer is ngative',	
			publisher: 'Gilad',
			origin_lang:'du' ,
			width: '4',
			color: 'brown'
		}
	];
});

/*
<div class="thumbnail" style="padding: 20px;">
                    <!-- <img data-ng-src="{{disc.image_link}}" alt=""> -->
                        <h4>CNN</h4>
            
                        <p>(CNN) -- Russia plans to send long-range bombers to the Gulf of Mexico in what appears to be Moscow's latest provocative maneuver in its increasingly frosty relations with the West.
Defense Minister Sergey Shoigu said Wednesday that "we have to maintain (Russia's) military presence in the western Atlantic and eastern Pacific, as well as the Caribbean and the Gulf of Mexico" -- including sending bombers "as part of the drills."
It's an argument U.S. officials don't seem to be buying.
"We do not see the security environment as warranting such provocative and potentially destabilizing activity," a senior Obama administration official said Thursday.
U.S. State Department spokeswoman Jen Psaki offered a similar response.</p>
                    </div>
                    <div class="ratings">
                        <p class="pull-right"></p>
                        <p>
                           CNN.com
                        </p>
                </div>

*/