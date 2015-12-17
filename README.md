# Project stub

This is a single page application (SAP) on Angular + React.


## Installation

```
> npm install
```
## Running in development

```
> npm start
```
This provides a development server.
JavaScript and HTML files are watched in `src` folder and the website is reloaded in case of changes.

## Tehchologies

### JavaScript

On the top level it's Angular application which calles smaller React components in the templates. The properties for the React components come from the Angular data model.

### CSS

PostCSS and [PreCSS](https://github.com/jonathantneal/precss) are used to empower CSS with variables and such.

For future needs it's possible to introduce other PostCSS plugins.

### Templates

Angular views are used on the page-level only. Further it goes to the React components to render the interface.

### File structure

Source code is place into `src` folder:

```
src/

  _helpers/              # JavaScript helpers

  modules/               # React components
    menu/                # Each component is stored in its folder
      menu.component.js  # The Ract code
      menu.css           # component view

  pages/                 # Angular contollers and Views
    contact/             # Each page stored in its folder
      contact.ctrl.js    # Angualr controller
      contact.html       # Page view

  index.html             # Initial root HTML
  inidex.js              # Initial root JavaScript
```

### Building process

Webpack builds project, watches the files for changes and rebuilds the needed pieces.

### Testing

```
gulp test
```

This will check codestyle.
