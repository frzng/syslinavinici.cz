Sysli na vinici Jekyll Site
===========================

This is a static site generated by [Jekyll][jekyll]. Production build contains Netlify CMS set to manage content via Netlify’s [Git Gateway][git-gateway] which in turn requires [Netlify Identity][netlify-identity].

Requirements
------------

* Ruby MRI 2.3.3 (system Ruby on macOS High Sierra)
* [Bundler][bundler] ≥ 1.16.1
* [npm][npm]

Development
-----------

1. Install Ruby dependencies

       bundle install

2. Install JavaScript dependencies

       npm install

3. Make sure Netlify CMS is in Jekyll’s destination

       bin/rake build:cms

4. Serve the site locally and watch for updates

       bin/jekyll serve

5. See server address in output from Jekyll.

*Hint*: If you’re using macOS High Sierra and some Ruby version manager like rbenv or RVM, try disabling its auto-switching and installing Ruby dependencies to your RubyGems user directory.

    rbenv shell system # or rvm use system
    bundle install --path ~/.gem

Production
----------

The result of production build can be generally hosted anywhere. The build itself can be executed wherever requirements are met and site’s dependencies can run.

1. Install Ruby dependencies

       bundle install --without=development

2. Install JavaScript dependencies

       npm install

3. Generate production site

       bin/rake JEKYLL_ENV=production TZ=Europe/Prague

4. Make everything from Jekyll’s destination directory accessible
   on `https://www.syslinavinici.cz`


[jekyll]: https://jekyllrb.com
[git-gateway]: https://www.netlify.com/docs/git-gateway/
[netlify-identity]: https://www.netlify.com/docs/identity/
[bundler]: https://bundler.io/#getting-started
[npm]: https://www.npmjs.com/get-npm
