const equal = (a, b) => {
  return () => expect(a).toBe(b)
}

console.log('Debut des tests ')
test('Expect to fail', equal(1, 2))
test('Expect to succed', equal(1, 1))
