// Dependencies.
import React from 'react'

// Layout components.
import App from '../../layouts/app'
import Main from '../../layouts/app_main'
import Sidebar from '../../layouts/app_sidebar'

// CSS.
import style from '../../css/isg-section.css'
import helper from '../../css/t7-helper.css'

// Utility methods.
import marked from 'marked'

// UI components.
import Button from '../../components/form_button/template'
import ListInline from '../../components/list_inline/template'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const main = []
    const sidebar = []

    this.props.data.map(function (o, i) {
      const id = o.id
      const href = '#' + id
      const jsx = o.jsx
      const markup = o.markup
      const name = o.name

      // Is there a "README.md"?
      var readme = o.readme

      if (readme) {
        readme = marked(readme)
        readme = (
          <div dangerouslySetInnerHTML={{__html: readme}} />
        )
      }

      // Hide code example.
      const displayNone = {
        display: 'none'
      }

      // Build main markup.
      main.push(
        <section id={id} key={i} className={style['isg-section']}>

          <header className={style['isg-section__header']}>
            <span className={[helper['t7-float-left'], helper['t7-capitalize']].join(' ')}>
              {name}
            </span>

            <a
              target='_blank'
              title='View on GitHub'
              className={[helper['t7-float-right'], helper['t7-font-normal']].join(' ')}
              href={'https://github.com/t7/style-guide-example/tree/master/source/components/' + id}
            >GitHub <span aria-hidden='true'>&rArr;</span></a>
          </header>

          <div
            className={style['isg-section__example']}
            data-component={id}
          />

          <hr />

          {readme}

          <p>
            <i>
              More code:
            </i>
          </p>

          <ListInline>
            <li data-trigger-jsx={id}>
              <Button text='View JSX' />
            </li>
            <li data-trigger-html={id}>
              <Button text='View HTML' />
            </li>
          </ListInline>

          <pre data-example-jsx={id} style={displayNone}>
            <code
              className='lang-jsx'
              dangerouslySetInnerHTML={{__html: jsx}}
            />
          </pre>

          <pre data-example-html={id} style={displayNone}>
            <code
              className='lang-html'
              dangerouslySetInnerHTML={{__html: markup}}
            />
          </pre>

        </section>
      )

      // Build sidebar markup.
      sidebar.push(
        <li key={i}>
          <a href={href}>
            {name}
          </a>
        </li>
      )
    })

    return (
      <App>

        <Sidebar>
          <ul>
            {sidebar}
          </ul>
        </Sidebar>

        <Main>
          <h1>
            Patterns
          </h1>

          {main}
        </Main>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {
  data: React.PropTypes.array
}

// Export.
export default Page