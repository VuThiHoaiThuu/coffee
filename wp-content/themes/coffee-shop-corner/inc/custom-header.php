<?php
/**
 * Custom header implementation
 */

function coffee_shop_corner_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'coffee_shop_corner_custom_header_args', array(
		'default-text-color' => 'fff',
		'header-text' 	     =>	false,
		'width'              => 600,
		'height'             => 650,
		'flex-width'         => true,
		'flex-height'        => true,
	) ) );
}

add_action( 'after_setup_theme', 'coffee_shop_corner_custom_header_setup' );

if ( ! function_exists( 'coffee_shop_corner_header_style' ) ) :
/**
 * Styles the header image and text displayed on the blog
 *
 * @see coffee_shop_corner_custom_header_setup().
 */
add_action( 'wp_enqueue_scripts', 'coffee_shop_corner_header_style' );
function coffee_shop_corner_header_style() {
	//Check if user has defined any header image.
	if ( get_header_image() ) :
	$custom_css = "
	#header {
			background-image:url('".esc_url(get_header_image())."');
			background-position: bottom center;
			background-size: 100% 100%;
		}";
   	wp_add_inline_style( 'coffee-shop-corner-basic-style', $custom_css );
	endif;
}
endif; // coffee_shop_corner_header_style