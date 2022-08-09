'use strict'

/**
 *  page controller
 *
 *  info: https://forum.strapi.io/t/strapi-v4-populate-media-and-dynamiczones-from-components/12670/26
 */

const { createCoreController } = require('@strapi/strapi').factories

// declare the uid for the controller
const uid = 'api::post.post'

// see @urbandale's post for context: https://forum.strapi.io/t/strapi-v4-populate-media-and-dynamiczones-from-components/12670/26
const components = {
 // Picture: true,
  Language: true,
  //Category: true,
  Content: {
    // a dynamic zone with different components,
    // and those components might have some repeatable sub-component too
    // We only seem to need to add the sub-components...
    populate: {
    //  Picture: true,
      Language: true,
   //   Category: true,
      Buttons: {
        // repeatable sub-component called "Buttons" used in a dynamic zone component
        populate: {
          page: true, // the Button component has a relation to a page item, so populate that...
        },
      },
      Icons: true, // another repeatable sub-component used in a dynamic zone component
    },
  },

}

module.exports = createCoreController(uid, () => {
  return {
    async find(ctx) {
      // overwrite default populate=* functionality
      if (ctx.query.populate === '*') {
        const entity = await strapi.entityService.findMany(uid, {
          ...ctx.query,
          populate: components,
        })
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

        return this.transformResponse(sanitizedEntity)
      }
      // maintain default functionality for all other request
      return super.find(ctx)
    },
    async findOne(ctx) {

      const { id } = ctx.request.params

      if (ctx.query.populate === '*') {
        const entity = await strapi.entityService.findOne(uid, id, {
          ...ctx.query,
          populate: components,
        })
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

        return this.transformResponse(sanitizedEntity)
      }

      return super.findOne(ctx)
    },
  }
})
