import React, { useState } from 'react'

import style from './Faq.module.css'

const Faq = ({id, title, description}) => {

const [toggle, setToggle] = useState(false)


  return (
    <article className={style.faq}>
        <div>
            <h4>{title}</h4>
            <button onClick={() => {setToggle(!toggle)}}>{toggle ? "-" : "+"}</button>
        </div>
        {toggle && <p>{description}</p>}
    </article>
  )
}

export default Faq