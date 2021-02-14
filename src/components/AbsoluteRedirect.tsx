import React, { FC, ReactElement, useEffect } from 'react';

type AbsoluteRedirectProperties = {
    to: string
}
const AbsoluteRedirect: FC<AbsoluteRedirectProperties> =({to}): ReactElement => {
    useEffect(() => {
        window.location.href = to
    })
    return <div>Redirecting...</div>
}

export default AbsoluteRedirect