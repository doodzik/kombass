import { Schema } from 'hydraulik'
import Articles   from './articles'

export default new Schema('Artists')
                    .subsetOf(Articles)
                    .filter(elm => elm.artist == elm.props.artist)
