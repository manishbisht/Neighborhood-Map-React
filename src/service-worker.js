/**
 * Created by manish on 8/1/18.
 */

self.addEventListener('fetch', function (e) {
    if (e.request.url.indexOf('https://maps.googleapis.com') == 0 ||
        e.request.url.indexOf('https://api.foursquare.com') == 0 ||
        e.request.url.indexOf('https://csi.gstatic.com') == 0 ||
        e.request.url.indexOf('https://csi.gstatic.com') == 0 ||
        e.request.url.indexOf('https://fonts.googleapis.com') == 0 ||
        e.request.url.indexOf('https://maps.gstatic.com ') == 0) {
        // Put data handler code here
        fetch(e.request)
            .then(function (response) {
                return caches.open(cacheName).then(function (cache) {
                    cache.put(e.request.url, response.clone());
                    console.log('ServiceWorker Fetched & Cached Data');
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
});