import style from './index.module.css'

export default ({children, avatar}) => {
  return <div className={style.profile}>
    <div className={style.profileAvatar}>
    </div>
    {children}
  </div>
}
