import React from 'react';

function HeaderItem({name, Icon}) {
    return (
        <div className="text-white flex items-center gap-3 text-xl font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
            <h2>{Icon}</h2>
            <h2>{name}</h2>
        </div>
    );
}

export default HeaderItem;