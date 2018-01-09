/**
 * Created by manish on 8/1/18.
 */

/*self.addEventListener('fetch', function (e) {
    if (e.request.url.indexOf('https://api.foursquare.com') == 0) {
        // Put data handler code here
        fetch(e.request)
            .then(function (response) {
                return caches.open(cacheName).then(function (cache) {
                    cache.put(e.request.url, response.clone());
                    return response;
                });
            })
    } else {
        e.respondWith(
            caches.match(e.request).then(function (response) {
                return response || fetch(e.request);
            })
        );
    }
});*/