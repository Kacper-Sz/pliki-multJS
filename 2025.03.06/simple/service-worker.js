const MY_CACHE = 'my-awesome-cache';

const MY_FILES = [
    'style.css',
];

// zapytaloo sie i pcha do cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(MY_CACHE).then((cache) => 
        {
            return cache.addAll(MY_FILES);
        })
    );
});



//czyszczenie jest opcjolanne ale powinno byc
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            //promise.all dla kazdego plku cos konkretnego wykona
            return Primise.all( cacheNames.filter( cacheName => {
                cacheName != MY_CACHE
            })).map( cacheName => {
                caches.delete(cacheName)
            });
        })
    );
})


self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
})
