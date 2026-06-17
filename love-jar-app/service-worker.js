/* ============================================
   SERVICE WORKER
   Caches files for offline access and PWA support
   ============================================ */

const CACHE_NAME = 'love-jar-v1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/styles/main.css',
    '/js/app.js',
    '/js/data.js',
    '/js/service-worker-register.js',
    '/manifest.json',
];

// Install event - cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching files for offline use');
                return cache.addAll(FILES_TO_CACHE).catch(() => {
                    // Don't fail if some files aren't cacheable yet
                    return FILES_TO_CACHE.filter(file => {
                        try {
                            cache.add(file);
                            return true;
                        } catch (e) {
                            return false;
                        }
                    });
                });
            })
    );
    self.skipWaiting(); // Activate immediately
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim(); // Take control of pages immediately
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached response if available
                if (response) {
                    return response;
                }

                // Otherwise, fetch from network
                return fetch(event.request)
                    .then(response => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response
                        const responseToCache = response.clone();

                        // Cache the response for future use
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(() => {
                        // Return offline fallback if network fails
                        return caches.match('/index.html');
                    });
            })
    );
});
