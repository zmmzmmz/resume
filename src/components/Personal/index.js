export default ({children, works}) => {
  return <section>
    <h3>工作以外经历</h3>
    <div>
      {
        works.map((item, index) => (
          <div key={index}>
            {item.name}
            <ul>
              {
                item.scopes && item.scopes.map((scope, idx) => (
                  <li key={idx}>{scope}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  </section>
}
