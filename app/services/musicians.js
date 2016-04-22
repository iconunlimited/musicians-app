import Ember from 'ember';
import Musician from 'musicians-app/models/musician';

export default Ember.Service.extend({

	getMusiciansWithBands() {
		return Ember.$.getJSON("/data/musicians.json").then(function(data) {
			var musiciansList = data.Musicians,
				bandsList = data.Bands,
				musiciansWithBands = [];

				musiciansList.forEach(function(musicianItem) {
					var bandId = musicianItem.band;

					bandsList.forEach(function(bandItem) {
						if(bandId === bandItem.id) {
							musiciansWithBands.push(Musician.create({
								id : musicianItem.id,
								firstName : musicianItem.first_name,
								lastName : musicianItem.last_name,
								bandName : bandItem.name
							}));
						}						
					});
				});
				return musiciansWithBands;
		});
	}

});
