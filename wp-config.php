<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'coffee' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'FB~pTqm7X4h|w(/Q]*fuR:1]O]Yc=pxXwv:okGgZBMG^Gad{iiOI^(#7{la1W@NT' );
define( 'SECURE_AUTH_KEY',  '#q4A-IIK3lLQJo][tM0*)fr3|NOo[Xp9 $[6^yNPgG]m##)z$-x`P_Z>O8K*)GuW' );
define( 'LOGGED_IN_KEY',    '3w3nqHq=cISCs<=W$ZWZS!6R^Zx,;f5TDQwAi1Q$)W$W09#5#_0Oy+qj[4!D,cwF' );
define( 'NONCE_KEY',        'T!I3 :Kzl%,qVT VY>s3gCIInWZSd+J*3Z~i+>WG(@L+*9wct(,:RR6`.$R(}CH4' );
define( 'AUTH_SALT',        'TU)?2;Z[n]1CvBd9wwh[i5GG{5N$tx`jv*hPP?RcF*|JY0N. K|PrPi&iA59fd,E' );
define( 'SECURE_AUTH_SALT', 'Mmci 1zh,:6x2g`zE[X8}(~ihG#B% #iPd.-hgr!mC n[|>vcbQJ9`90&m`cusm!' );
define( 'LOGGED_IN_SALT',   'Dpi(!21~*gY 2)BX4-bF30e<N#39A:cteXIydbeRgZ@/_j9eiV]Z*>;L]*(,8@~)' );
define( 'NONCE_SALT',       '%w3Qmv5GUB(t|U6C/RPk@n%E$p`2Ak,)nU@<#[}~{R!p6~A]lMq!>Q9lWf*&Do}!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
