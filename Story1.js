//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
function instantiateBookReader(selector, extraOptions) {
  selector = selector || '#BookReader';
  extraOptions = extraOptions || {};
  var options = {
    data: [
      [
		//One set
	    { width: 620, height: 848,
          uri: '../images/hindi_36_0_25p.jpg' },
        { width: 620, height: 848,
          uri: '../images/hindi_36_1_25p.jpg' },
      ],
      [
        { width: 620, height: 848,
          uri: '../images/hindi_36_2_25p.jpg' },
        { width: 620, height: 848,
          uri: '../images/hindi_36_3_25p.jpg' },
      ],
      [
        { width: 620, height: 848,
          uri: '../images/hindi_36_4_25p.jpg' },
	    { width: 620, height: 848,
          uri: '../images/hindi_36_0_25p.jpg' },
      ],
    ],

    // Book title and the URL used for the book title link
    //bookTitle: 'BookReader Demo',
    //bookUrl: '../index.html',
    //bookUrlText: 'Back to Demos',
    //bookUrlTitle: 'This is the book URL title',

    // thumbnail is optional, but it is used in the info dialog
    //thumbnail: '//archive.org/download/BookReader/img/page014.jpg',
    // Metadata is optional, but it is used in the info dialog
    //metadata: [
    //  {label: 'Title', value: 'Open Library BookReader Presentation'},
    //  {label: 'Author', value: 'Internet Archive'},
    //  {label: 'Demo Info', value: 'This demo shows how one could use BookReader with their own content.'},
    //],

    // Override the path used to find UI images
    imagesBaseURL: 'BookReader/images/',

    ui: 'full', // embed, full (responsive)

	enableMobileNav: false,
	
    el: selector,
	
  };
  $.extend(options, extraOptions);
  var br = new BookReader(options);
  br.init();
}
