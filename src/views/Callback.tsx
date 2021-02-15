import React, { useEffect } from 'react';
const queryString = require('query-string');

const Callback = () => {
    
    const values = queryString.parse(window.location.search)
    if (values['code']) {
        return(
            <div>
                Callback code {values['code']}
            </div>
        );
    } else {
        return(
            <div>
                Missing code
            </div>
        )
    }

}

export default Callback;