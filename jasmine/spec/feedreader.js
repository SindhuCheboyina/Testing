$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: it has a URL definedand that the URL is not empty in allFeeds object*/
         it('url is defined and is not empty', function() {
           for (let feeds of allFeeds) {
             expect(feeds.url).toBeDefined();
             expect(feeds.url.length).not.toBe(0);
           }
         })

        /* TODO: ensures it has a name defined and that the name is not empty.*/
         it('name is defined and is not empty', function() {
           allFeeds.forEach(function(feeds) {
             expect(feeds.name).toBeDefined();
             expect(feeds.name.length).toBeGreaterThan(0)
           })
         })
    });


    /* TODO: Write a new test suite named "The menu" */
       describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is hidden by default. */
         it('menu element is hidden by default', function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes visibility when the menu icon is clicked.
           This test does the menu display whenclicked and does it hide when clicked again.
          */
        var menuIcon= $('.menu-icon-link');
        it('menu is visible when menu icon is clicked and hides when clicked again', function() {
          menuIcon.click();
          expect($('body').hasClass('menu-hidden')).toBeFalsy();

          menuIcon.click();
          expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
      })
    /* TODO: Write a new test suite named "Initial Entries" */
     describe('Initial Entries', function() {

        /* TODO: there is at least a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
           loadFeed(0,done);
         });
         it('contains atleast one .entry element in .feed', function(done) {
           expect($('.feed .entry').length).not.toBe(0);
           done();
         });
      })
    /* TODO: Write a new test suite named "New Feed Selection" */
        describe('new Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded */
         var newFeed,feed;
         beforeEach(function(done) {
           loadFeed(0,function() {
             feed= $('.feed').html();
             loadFeed(1,done);
           });
         });
         it('content changes when new feed is loaded', function(done) {
           newFeed= $('.feed').html();
           expect(feed).not.toBe(newFeed);
           done();
         });
       });
}());
