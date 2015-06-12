import { Klass } from 'hydraulik'
import sets from './sets.js'

var klass = new Klass()

sets.forEach(set => klass.push(require(`./${set}`)))

export default klass.sets
