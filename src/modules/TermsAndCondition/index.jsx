/* eslint-disable react/no-danger */
import data from './data.json'
import useStyle from './style'

function TermsAndConditions() {
  const classes = useStyle()
  const { contents, termsOfUse } = data

  const handleClickScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className={classes.paper}>
      <div className={classes.contentWrapper}>
        <div className={classes.headerTitle}>Privacy Policy & Terms of Use</div>
        {contents?.map((content) => (
          <div key={`content-${content?.title}`}>
            <div className={classes.title}>{content?.title}</div>
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: content?.description }}
            />
          </div>
        ))}
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.headerTitle}>Terms of Use</div>
        <ul className={classes.terms}>
          {termsOfUse?.map((term, index) => (
            <li
              key={`term-order-${term.title}`}
              onClick={() => handleClickScroll(`term-content-${term.title.toLowerCase()}`)}
              role='presentation'
              className={classes.listTitle}
            >{`${index + 1}. ${term?.title}`}</li>
          ))}
        </ul>
        <div className={classes.contentWrapper}>
          {termsOfUse?.map((term, index) => (
            <div
              key={`term-content-${term?.title}`}
              id={`term-content-${term?.title.toLowerCase()}`}
            >
              <div className={classes.title}>{`${index + 1}. ${term?.title}`}</div>
              <div
                className={classes.description}
                dangerouslySetInnerHTML={{ __html: term?.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
