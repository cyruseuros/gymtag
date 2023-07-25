import { define, html } from 'hybrids'
import { appColor, styles } from '../lib/theme'
import ScopeModel from '../models/scope'

interface Scope {
  scopes: ScopeModel[]
}

export default define<Scope>({
  tag: 'app-scope',
  scopes: undefined,
  render: e =>
    html`
      <template layout="row:wrap gap:2px width:::20px">
        ${e.scopes.map(
          scope => html`
            <div
              class="scope"
              layout="width:5px height:5px ::border-radius:normal"
              style="${{
                backgroundColor: appColor(scope as string),
              }}"
            ></div>
          `,
        )}
      </template>
    `.style(...styles),
})
