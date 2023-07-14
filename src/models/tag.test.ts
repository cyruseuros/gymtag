import test from 'ava'
import { makeTagId } from './tag'

const table = [
  { name: 'empty', in: '', out: '' },
  { name: 'space', in: 'two words', out: 'two-words' },
  { name: 'multi-space', in: 'two  words', out: 'two-words' },
  { name: 'tab', in: 'two\twords', out: 'two-words' },
  { name: 'multi-tab', in: 'two\t\twords', out: 'two-words' },
  { name: 'mixed-space-tab', in: 'two\t words', out: 'two-words' },
  { name: 'space-dash', in: 'two -words', out: 'two-words' },
  { name: 'multi-dash', in: 'two--words', out: 'two-words' },
  { name: 'space-multi-dash', in: 'two --words', out: 'two-words' },
  { name: 'multi-space-multi-dash', in: 'two  --words', out: 'two-words' },
]

for (const row of table) {
  test(row.name, (t) => {
    t.is(makeTagId(row.in), row.out)
  })
}
