Sysli na vinici Jekyll Site
===========================

This is a static site generated by [Jekyll][jekyll]. Production build contains [Netlify CMS][netlify-cms] set to manage content via Netlify’s [Git Gateway][git-gateway] using GitHub Backend utilizing Netlify’s server for authentication.

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

3. Serve the site locally and watch for updates

       bin/rake serve

4. See server address in output from Jekyll.

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

Exploration
-----------

You can see Rake tasks generally usable from command line by using `rake` with the usual `-T` or `-D` arguments.

The site source files are very explicit as there are no sophisticated Jekyll plugins (except for well-known [SEO tag][jekyll-seo-tag]) and Liquid templating language doesn’t allow any nasty auto-magick to occur. Simply get familiar with Jekyll and you should be good to go. Just beware that `assign`s from `include`d templates leak outside—they’re not scoped.


[jekyll]: https://jekyllrb.com
[netlify-cms]: https://www.netlifycms.org
[git-gateway]: https://www.netlify.com/docs/git-gateway/
[netlify-identity]: https://www.netlify.com/docs/identity/
[bundler]: https://bundler.io/#getting-started
[npm]: https://www.npmjs.com/get-npm
