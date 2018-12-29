'use strict';

/**
 * Suite.js controller
 *
 * @description: A set of functions called "actions" for managing `Suite`.
 */

module.exports = {

  /**
   * Retrieve suite records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.suite.search(ctx.query);
    } else {
      return strapi.services.suite.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a suite record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.suite.fetch(ctx.params);
  },

  /**
   * Count suite records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.suite.count(ctx.query);
  },

  /**
   * Create a/an suite record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.suite.add(ctx.request.body);
  },

  /**
   * Update a/an suite record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.suite.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an suite record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.suite.remove(ctx.params);
  }
};
