# Expected

```javascript
const expect = res => ({
  toBe: expected => {
    if (res !== expected)
      throw new Error(`${res} is not the same as ${expected}`)
  },
  toEqual: expected => {
    if (res === expected)
      throw new Error(`${res} is not the same as ${expected}`)
  }
})

```
