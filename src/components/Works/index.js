import Work from './Work'
/**
 *
 * @param works
 * @returns {*}
 */
export default ({works}) => {
  return <section>
    <h3>工作经历</h3>
    {
      works.map((work, index) => <Work {...work} key={index} />)
    }
  </section>
}
