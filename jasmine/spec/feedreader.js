$(function () {
    
    describe('RSS Feeds', function () {
        
        it('Feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
       
        it('Feed Array Contains a Url and its not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        it('Feed Array Contains a Name and its not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });

    });

    describe("The menu", function () {

        it('It is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('Does It Toggle', function () {

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

    });
   
    describe("Initial Entries", function () {

        beforeEach(function (done) {
            loadFeed(0, done); 
        });

        it('Feed container is not empty after load feed is finished running', function (done) {
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });

    });

  describe('New Feed Selection', function () {

        var oldFeed;
        var newFeed;
        beforeEach(function (done) {
            
            //Run the load feed function and check what links are currently present
            loadFeed(0, function () {
                oldFeed = $('.entry-link').text();
                done();
                return oldFeed;
            });
        });

        it('Load new content when the content is changed', function (done) {
            //Run the load feed function again and check which links are now present
            loadFeed(1, function () {
                newFeed = $('.entry-link').text();
                expect(oldFeed).not.toEqual(oldFeed);
            });
        });
    });
}());