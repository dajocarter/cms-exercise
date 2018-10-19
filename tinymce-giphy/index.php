<?php
/*
 * Plugin Name: TinyMCE Giphy
 * Plugin URI: https://github.com/dajocarter/cms-exercise
 * Description: Adds a button to the TinyMCE editor to allow authors to search for gifs to insert into their articles
 * Version: 1.0
 * Author: David Carter
 * Author URI: https://www.dajocarter.com/
 */

class TinyMCE_Giphy
{

  /**
   * Constructor. Called when the plugin is initialised.
   */
  public function __construct()
  {
    add_action('admin_init', array($this, 'giphygifsearch_setup'));
    add_action('admin_enqueue_scripts', array($this, 'giphygifsearch_dependencies'));
  }

  public function giphygifsearch_dependencies()
  {
    wp_enqueue_script('jquery');
  }

  public function giphygifsearch_setup()
  {
    // Check if the user can edit posts or pages before registering the plugin
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) return;

    // Check if the user has the visual editor enabled before registering the plugin
    if (get_user_option('rich_editing') !== 'true') return;

    // Now we're good to go
    add_filter('mce_external_plugins', array(&$this, 'giphygifsearch_register_plugin'));
    add_filter('mce_buttons', array(&$this, 'giphygifsearch_register_button'));
  }

  public function giphygifsearch_register_plugin($plugin_array)
  {
    $plugin_array['giphygifsearch'] = plugins_url('/index.js', __FILE__);
    return $plugin_array;
  }

  public function giphygifsearch_register_button($buttons)
  {
    $buttons[] = 'giphygifsearch';
    return $buttons;
  }
}

$tinymce_giphy = new TinyMCE_Giphy;

?>
