import style from './index.module.css'

export default ({children, avatar, user, level}) => {
  return <div className={style.profile}>
    <div className={style.profileAvatar}>
      <img src="/avatar.jpg" alt=""/>
    </div>
    <div className={style.profileInfo}>
      <p className={'text-large text-dark'}>张明</p>
      <p><span className={'text-gray'}>岗位：</span>前端开发工程师</p>
      <p><span className={'text-gray'}>期望薪资：</span>20-25k</p>
    </div>
    <div className={style.profileSocial}>
      <p className={'text-large text-gray'}>社交</p>
      <p><span className={'text-gray'}>phone：</span>13575482275</p>
      <p><span className={'text-gray'}>github：</span><a href="http://github.com/youzpan">http://github.com/youzpan</a></p>
      <p><span className={'text-gray'}>gitee：</span><a href="https://gitee.com/russel">https://gitee.com/russel</a></p>
    </div>
    {children}
  </div>
}
