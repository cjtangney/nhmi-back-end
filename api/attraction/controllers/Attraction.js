'use strict';

/**
 * Attraction.js controller
 *
 * @description: A set of functions called "actions" for managing `Attraction`.
 */

module.exports = {

  /**
   * Retrieve attraction records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.attraction.search(ctx.query);
    } else {
      return strapi.services.attraction.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a attraction record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.attraction.fetch(ctx.params);
  },

  /**
   * Count attraction records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.attraction.count(ctx.query);
  },

  /**
   * Create a/an attraction record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.attraction.add(ctx.request.body);
  },

  /**
   * Update a/an attraction record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.attraction.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an attraction record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.attraction.remove(ctx.params);
  }
};
