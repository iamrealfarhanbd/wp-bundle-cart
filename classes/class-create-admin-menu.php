<?php
/**
 * This file will create admin menu page.
 */

class wpbc_Create_Admin_Page {

    public function __construct() {
        add_action( 'admin_menu', [ $this, 'create_admin_menu' ] );
    }

    public function create_admin_menu() {
        $capability = 'manage_options';
        $slug = 'wpbc-settings';

        add_menu_page(
            __( 'Wp Bundle Cart', 'wp-bundle-cart' ),
            __( 'Wp Bundle Cart', 'wp-bundle-cart' ),
            $capability,
            $slug,
            [ $this, 'menu_page_template' ],
            'dashicons-buddicons-replies'
        );
    }

    public function menu_page_template() {
        echo '<div class="wrap"><div id="wpbc-admin-app"></div></div>';
    }

}
new wpbc_Create_Admin_Page();