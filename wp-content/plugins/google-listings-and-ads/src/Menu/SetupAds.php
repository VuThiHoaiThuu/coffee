<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\GoogleListingsAndAds\Menu;

use Automattic\WooCommerce\GoogleListingsAndAds\Infrastructure\Registerable;
use Automattic\WooCommerce\GoogleListingsAndAds\Infrastructure\Service;

/**
 * Class SetupAds
 *
 * @package Automattic\WooCommerce\GoogleListingsAndAds\Menu
 */
class SetupAds implements Service, Registerable {

	/**
	 * Register a service.
	 */
	public function register(): void {
		add_action(
			'admin_menu',
			function () {
				wc_admin_register_page(
					[
						'title'  => __( 'Ads Setup Wizard', 'google-listings-and-ads' ),
						'parent' => '',
						'path'   => '/google/setup-ads',
						'id'     => 'google-setup-ads',
					]
				);
			}
		);
	}
}
