import { define, html } from 'hybrids'
import { appColor, styles } from '../lib/theme'
import S from '../models/scope'
import Scope from '../models/scope'

interface Scope {
  scopes: S[]
}

export default define<Scope>({
  tag: 'app-scope',
  scopes: undefined,
  render: e =>
    html`
      <template layout="row gap">
        ${e.scopes.map(
          scope => html`
            <div
              class="scope"
              style="${{
                backgroundColor: appColor(scope as string),
              }}"
            ></div>
          `,
        )}
      </template>
    `.css`
      .scope {
        height: 0.2em;
        width: 0.2em;
        border-radius: 0.2em;
      }
    `.style(...styles),
})
