import { Schema } from 'hydraulik'
import Articles   from './articles'

export default new Schema('Author')
                    .subsetOf(Articles)
                    .filter(elm => elm.author == elm.props.author)
