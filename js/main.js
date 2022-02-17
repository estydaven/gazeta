$( '.menu-icon' ).click( function() {
    if ( $( '.header__nav' ).is( ':hidden' ) ) {
     $( '.header__nav' ).show('slideToggle');
     $( '.header__logo' ).addClass('header__logo_mob');
     $( '.header' ).addClass('header_mob');
     $( '.menu-icon__burger' ).addClass('menu-icon__burger_open');
   } else {
     $( '.header__nav' ).hide('slideToggle');   
     $( '.header__logo' ).removeClass('header__logo_mob');  
     $( '.header' ).removeClass('header_mob');
     $( '.menu-icon__burger' ).removeClass('menu-icon__burger_open');
   }
 });