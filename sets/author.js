import { Schema } from 'hydraulik'
import Articles   from './articles'

export default new Schema('Author')
                    .subset(Articles)
                    .filter(elm => elm.author == elm.props.author)
