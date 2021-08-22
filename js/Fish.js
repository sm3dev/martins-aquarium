/**
 *  Fish which renders individual fish objects as HTML
 */
 export const Fish = (fishObj) => {
	return `<article class="fish__card card--padding">
    <div><img class="fish__image" src="images/${fishObj.image}" alt="${fishObj.name} photo"></div>
				<h3 class="fish__name">${fishObj.name}</h3>
				<ul class="fish-details__list">
                    <li class="fish-details fish-details__food"><spam class="text--bold">Food:</spam> ${fishObj.food}</li>
                    <li class="fish-details fish-details__species"><spam class="text--bold">Species:</spam> ${fishObj.species}</li>
                    <li class="fish-details fish-details__length"><spam class="text--bold">Body Length:</spam>  ${fishObj.length}</li>
                    <li class="fish-details fish-details__water-type"><spam class="text--bold">Water Type:</spam>  ${fishObj.waterType}</li>
                    <li class="fish-details fish-details__harvest-location"><spam class="text--bold">Harvest Location:</spam> ${fishObj.harvestLocation}</li>
				</ul>
        	</article>`
}   