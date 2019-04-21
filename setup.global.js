const colors = {
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  reset: '\x1b[0m'
}

const expect = res => ({
  toBe: expected => {
    if (res !== expected)
      throw new Error(colors.red, `${res} is not the same as ${expected}`)
  },
  toEqual: expected => {
    if (res === expected)
      throw new Error(colors.red, `${res} is not the same as ${expected}`)
  }
})

const test = async (title, callback) => {
  console.log('\n', colors.reset, `---- ${title}`, '\n')
  try {
    await callback()
    console.log(colors.green, '√ done')
  } catch (error) {
    console.log(colors.red, 'X error')
    console.log(colors.reset, error)
  }
}

global.test = test
global.expect = expect
