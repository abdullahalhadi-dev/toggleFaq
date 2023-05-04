import React, { useState } from 'react'
import { faqsData } from "../Data/Data"
import Faq from './Faq';

import style from './Faqs.module.css'

const Faqs = () => {

    const [faqs, setFaq] = useState(faqsData);
     
  return (
    <main className={style.container}>
       <section className={style.faqs}>
            <h1 style={{textAlign: "center"}}>FAQs</h1>
            {
                faqs.map(faq => <Faq key={faq.id} {...faq}/>)
            }
       </section> 
    </main>
  )
}

export default Faqs