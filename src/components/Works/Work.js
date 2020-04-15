import React from 'react'
import style from './work.module.css'
export default (info) => {
  const {company, level, experience, startAt, endAt, products} = info
  return <div className={style.work}>
    <h4>
      <div className={style.workTitle}>
        <b>{company}</b> - <span>{level}</span>
      </div>
      <div>{startAt} - {endAt}</div>
    </h4>
    <div>{experience}</div>
    <div>
      {
        products.map((item, index) => <div key={index} className={style.workProduct}>
          {item.name} - <span className={'text-gray'}>{item.desc}</span>
          <ul className={style.workScopes}>
            {
              item.scopes && item.scopes.map((item, idx) => <li key={idx}>
                {item}
              </li>)
            }
          </ul>
        </div>)
      }
    </div>
  </div>
}
