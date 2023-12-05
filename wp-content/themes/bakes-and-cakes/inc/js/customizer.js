jQuery(document).ready(function($) {
	
	/* Move widgets to their respective sections */
	wp.customize.section( 'sidebar-widgets-google-map' ).panel( 'bakes_and_cakes_home_page_settings' );
	wp.customize.section( 'sidebar-widgets-google-map' ).priority( '40' );

	$('body').on('click', '.flush-it', function(event) {
        $.ajax ({
            url     : bakes_and_cakes_cdata.ajax_url,  
            type    : 'post',
            data    : 'action=flush_local_google_fonts',    
            nonce   : bakes_and_cakes_cdata.nonce,
            success : function(results){
                //results can be appended in needed
                $( '.flush-it' ).val(bakes_and_cakes_cdata.flushit);
            },
        });
    });
    
});


( function( api ) {

	// Extends our custom "example-1" section.
	api.sectionConstructor['pro-section'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );