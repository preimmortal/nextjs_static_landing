import * as React from 'react'
import {mount} from 'enzyme'
const sum = require('../pages/sum')
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})
