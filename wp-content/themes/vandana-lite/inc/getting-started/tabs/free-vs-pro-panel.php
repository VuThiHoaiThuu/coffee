<?php
/**
 * Free Vs Pro Panel.
 *
 * @package Vandana_Lite
 */
?>
<!-- Free Vs Pro panel -->
<div id="free-pro-panel" class="panel-left">
	<div class="panel-aside">               		
		<img src="<?php echo esc_url( get_template_directory_uri() . '/inc/getting-started/images/free-vs-pro.jpg' ); //@todo change respective images.?>" alt="<?php esc_attr_e( 'Free vs Pro', 'vandana-lite' ); ?>"/>
		<a class="button button-primary" href="<?php echo esc_url( 'https://blossomthemes.com/wordpress-themes/vandana/?utm_source=free_theme&utm_medium=getting_started&utm_campaign=pro_theme_upgrade' ); ?>" title="<?php esc_attr_e( 'View Premium Version', 'vandana-lite' ); ?>" target="_blank">
            <?php esc_html_e( 'View Pro', 'vandana-lite' ); ?>
        </a>
	</div><!-- .panel-aside -->
</div>