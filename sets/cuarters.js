import { Schema } from 'hydraulik'
import Articles   from './articles'

export default new Schema('Cuarters')
                    .subsetOf(Articles)
                    .filter(elm => elm.cuarter == elm.props.cuarter)
