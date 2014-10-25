Angular-Support
===============

TEONITE Support Frontend - an application to submit a bug/features from your app/service to YouTrack/Redmine

Modal Styling
=============

Main file for styling is ``src/scss/ngSupport.scss``

From this file we build the overall look of the modal dialog which is common and independent of the application to which it is connected ngSupport.

Angular Support (ngSupport) uses Twitter Bootstrap (Button / Modal / Form).

The HTML templates are in ``src/app/templates``

- topBarTemplate.html - upper beam with basic information
- modalContentTemplate.html - the modial dialog itself

Configuration
-------------

```
  var ngSupportConfig = {
    server: '', // TEONITE Django Support API URL
    token: ''   // Django REST Token
  }
```
