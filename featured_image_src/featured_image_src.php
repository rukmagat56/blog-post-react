<?php
/*
 * Plugin Name: Featured Image Src

 * Description:       Handle the basics with this plugin.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author: sunder
 * Text Domain:       featured_image_src;
 * Domain Path:       /languages
 */
remove_filter('the_excerpt','wpautop');
remove_filter('the_content','wpautop');

if(!function_exists('getFeaturedImgSrc')){
function getFeaturedImgSrc($obj,$fieldName,$request){
    if($obj['featured_media']){
        $img=wp_get_attachment_image_src($obj['featured_media'],'full');
        return $img[0];
    }
}
}
// adding field to rest api for getting feature image src
add_action('rest_api_init',function(){
register_rest_field('post','featured_src',[
    'get_callback'=>'getFeaturedImgSrc',
]);
});