<?php
/**
 * Plugin Name: Wp Bundle Cart
 * Author: Farhan Ahmed
 * Author URI: https://github.com/iamrealfarhanbd
 * Version: 1.0.0
 * Description: WordPress Bundle Cart.
 * Text-Domain: wp-bundle-cart
 */

if( ! defined( 'ABSPATH' ) ) : exit(); endif; // No direct access allowed.

/**
* Define Plugins Contants
*/
define ( 'WPBC_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define ( 'WPBC_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );

/**
 * Loading Necessary Scripts
 */
add_action( 'admin_enqueue_scripts', 'load_scripts' );
function load_scripts() {
    wp_enqueue_script( 'wp-bundle-cart', WPBC_URL . 'dist/bundle.js', [ 'jquery', 'wp-element' ], wp_rand(), true );
    wp_localize_script( 'wp-bundle-cart', 'appLocalizer', [
        'apiUrl' => home_url( '/wp-json' ),
        'nonce' => wp_create_nonce( 'wp_rest' ),
    ] );
}

require_once WPBC_PATH . 'classes/class-create-admin-menu.php';
require_once WPBC_PATH . 'classes/class-create-settings-routes.php';