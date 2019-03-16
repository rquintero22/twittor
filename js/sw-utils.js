

function actualizaCacheDinamico( dynamicCache, req, res ) {

    if ( res.ok ) {
       return scaches.open( dynamicCache ).then( cache => {
            cache.put( req, res.clone() );

            return res.clone();
        });
    } else {
        return res;
    }
}