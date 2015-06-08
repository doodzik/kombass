import { Klass, ObserverKlass } from 'hydraulik'
import sets from './sets.json'

var klass = new Klass()
sets.forEach(set => klass.push(require(`./${set}`)))
export default new ObserverKlass(klass).sets
