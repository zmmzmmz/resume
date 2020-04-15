import style from './index.module.css'
export default ({educations}) => {
  return <section>
    <h3>教育经历</h3>
    <div>
      {
        educations.map((item, index) => (
          <div key={index} className={style.eduction}>
            <div>
              {item.school} - {item.major}
            </div>
            <div>
              {item.startAt} - {item.endAt}
            </div>
          </div>
        ))
      }
    </div>
  </section>
}
