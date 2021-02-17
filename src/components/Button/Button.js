import React from 'react'

function Button({ handleCurrentWishes, wish }) {

    return <button className="button" onClick={() =>handleCurrentWishes(wish)}>remove</button>
}

export default Button

//pasar el nombre del clik al button y cuando se haga submit pasar nombre