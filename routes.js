if (Meteor.isServer) {
	var evt = {
	    name: 'Blind Guardian',
	    image: 
	     { fileId: 'XGF4S4N7ZhejcqeAs',
	       url: 'https://guillermo-sitios.s3.amazonaws.com/orionjs/4JWYzcgfM7fp28brX.png' },
	    ticketUrl: 'http://ticketek.cl/tktfunciones.aspx?evento=BLIND%20GUARDIAN',
	    afiche: 
	     { fileId: 'PskZ5kyQSt7at6L9u',
	       url: 'https://guillermo-sitios.s3.amazonaws.com/orionjs/RKQadDzbqRXqCA9PP.png' },
	    content: '<p class="fr-tag">Entradas a la venta para el regreso de</p><p class="fr-tag"><br></p><p class="fr-tag">BLIND GUARDIAN a CHILE.</p><p class="fr-tag"><br></p><p class="fr-tag">Ya están disponibles a través del Sistema Ticketek.</p><p class="fr-tag"><br></p><p class="fr-tag">En el marco del Tour de su más reciente álbum “Beyond The Red Mirror”, el sucesor de “Memories of a Time to Come” del 2012, la banda alemana y una de las más grandes del Power Metal, confirmó el regreso a nuestro país el próximo Viernes 16 de Octubre en el Teatro Caupolicán.</p><p class="fr-tag"><br></p><p class="fr-tag">Las fechas del Tour por Sudamérica (Octubre 2015) son:</p><p class="fr-tag"><br></p><p class="fr-tag">O2/10 Fortaleza -Brasil – Siara Hall</p><p class="fr-tag">03/10 Recife – Brasil – Baile Perfumado</p><p class="fr-tag">06/10 Porto Alegre – Brasil – Opiniao</p><p class="fr-tag">07/10 Curitiba – Brasil – Master Hall</p><p class="fr-tag">09/10 Rio de Janeiro – Brasil – Vivo Rico</p><p class="fr-tag">10/10 Carlos Prates – Brasil – Music Hall</p><p class="fr-tag">12/10 Sao Paulo – Brasil – HSBC Circle</p><p class="fr-tag">14/10 Buenos Aires – Argentina – Teatro Flores</p><p class="fr-tag">16/10 Santiago – Chile – Teatro Caupolicán</p><p class="fr-tag">20/10 Mexico City – México – Circo Volador</p><p class="fr-tag"><br></p><p class="fr-tag">::::::::::::::::::::::::::::::::::::::::::::::::::::::</p><p class="fr-tag"><br></p><p class="fr-tag">Entradas a la venta!!!!!</p><p class="fr-tag">A través del Sistema Ticketek y sin recargo en Tienda Rock Music.(Preventa hasta el 16 de Abril o hasta agotar stock)</p><p class="fr-tag"><br></p><p class="fr-tag">Preventa</p><p class="fr-tag"><br></p><p class="fr-tag">Platea Alta = 18.000</p><p class="fr-tag"><br></p><p class="fr-tag">Cancha = 22.000</p><p class="fr-tag"><br></p><p class="fr-tag">Palcos = 32.000</p><p class="fr-tag"><br></p><p class="fr-tag"><br></p><p class="fr-tag"><br></p><p class="fr-tag">Precio General</p><p class="fr-tag"><br></p><p class="fr-tag">Platea Alta = 22.000</p><p class="fr-tag"><br></p><p class="fr-tag">Cancha = 27.000</p><p class="fr-tag"><br></p><p class="fr-tag">Palcos = 40.000</p>',
	    slug: 'blind-guardian',
	};
	for (var i = 0; i < 20; i++) {
		console.log('next insert', i);
		evt.slug += i;
		orion.entities.nextEvents.collection.insert(evt);
	}
}




SiteController = RouteController.extend({
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'adminLoading',
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		SEO.set({
			title: orion.dictionary.get('seoTitle'),
			link: {
				icon: orion.dictionary.get('seoFavIcon.url'),
			},
			meta: {
				'description': orion.dictionary.get('seoDescription')
			},
			og: {
				'title': orion.dictionary.get('seoTitle'),
				'description': orion.dictionary.get('seoDescription'),
				'image': orion.dictionary.get('seoImage.url')
			}
		});
	}
});

Router.route('/', {
	name: 'index',
	layoutTemplate: null,
	controller: 'SiteController'
});

Router.route('/home', {
	name: 'home',
	controller: 'SiteController'
});

Router.route('/next-events', {
	name: 'nextEvents.index',
	controller: 'SiteController'
});

Router.route('/next-events/:slug', {
	name: 'nextEvents.show',
	controller: 'SiteController'
});

Router.route('/past-events', {
	name: 'pastEvents.index',
	controller: 'SiteController'
});

Router.route('/past-events/:slug', {
	name: 'pastEvents.show',
	controller: 'SiteController'
});

Router.route('/news', {
	name: 'news.index',
	controller: 'SiteController'
});

Router.route('/news/:slug', {
	name: 'news.show',
	controller: 'SiteController'
});

Router.route('/contact', {
	name: 'contact',
	layoutTemplate: 'contactLayout',
	controller: 'SiteController'
});