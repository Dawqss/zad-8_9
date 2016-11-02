function rysujChoinke(n) {
	for ( i = 0; i < n ; i++) {
		var star = "";

		for ( j = 0; j < n - i; j++) {
			star += " ";
		}

		for ( j = 0; j <= i * 2 ; j++) {
			star += "*";
		}

		console.log(star);
	}
}

rysujChoinke(4);

rysujChoinke(6);

rysujChoinke(10);