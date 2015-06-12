import { Klass } from 'hydraulik'
import sets      from './sets.js'
import articles  from '../articles/articles.js'

var klass = new Klass()

sets.forEach(set => klass.push(require(`./${set}`)))

var Article = klass.sets.articles

articles.forEach(article => Article.create(require(`../articles/${article}`)))

export default klass.sets
