// Required
@import "functions";
@import "variables";
@import "variables-dark";

// Add a custom color to $theme-colors
$custom-colors: (
  "custom-color": #712cf9
);
$theme-colors: map-merge($theme-colors, $custom-colors);

@import "maps";
@import "mixins";
@import "utilities";

// Add a custom color to new theme maps

// Light mode
$custom-colors-text: ("custom-color": #712cf9);
$custom-colors-bg-subtle: ("custom-color": #e1d2fe);
$custom-colors-border-subtle: ("custom-color": #bfa1fc);

$theme-colors-text: map-merge($theme-colors-text, $custom-colors-text);
$theme-colors-bg-subtle: map-merge($theme-colors-bg-subtle, $custom-colors-bg-subtle);
$theme-colors-border-subtle: map-merge($theme-colors-border-subtle, $custom-colors-border-subtle);

// Dark mode
$custom-colors-text-dark: ("custom-color": #e1d2f2);
$custom-colors-bg-subtle-dark: ("custom-color": #8951fa);
$custom-colors-border-subtle-dark: ("custom-color": #e1d2f2);

$theme-colors-text-dark: map-merge($theme-colors-text-dark, $custom-colors-text-dark);
$theme-colors-bg-subtle-dark: map-merge($theme-colors-bg-subtle-dark, $custom-colors-bg-subtle-dark);
$theme-colors-border-subtle-dark: map-merge($theme-colors-border-subtle-dark, $custom-colors-border-subtle-dark);

// Remainder of Bootstrap imports
@import "root";
@import "reboot";
// etc