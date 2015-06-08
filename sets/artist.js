import { Schema } from 'hydraulik'
import Articles   from './articles'

export default new Schema('Artist')
                    .subset(Articles)
                    .filter(elm => elm.artist == elm.props.artist)
