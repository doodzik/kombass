import { Schema } from 'hydraulik'
import { Type }   from 'hydraulik-types'

export default new Schema('Articles')
                    .type(Type).as('author')
                    .type(Type).as('artist')
                    .type(Type).as('cuarter')
                    .type(Type).as('content')
                    .type(Type).as('url')
