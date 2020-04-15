import style from './index.module.css'

export default ({children, avatar}) => {
  return <div className={style.profile}>
    <div className={style.profileAvatar}>
      <img src="/avatar.jpg" alt=""/>
    </div>
    {children}
  </div>
}
