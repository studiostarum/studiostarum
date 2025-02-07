'use strict';

module.exports = {
  async create(ctx) {
    const { email } = ctx.request.body;

    if (!email) {
      return ctx.badRequest('Email is required');
    }

    try {
      // Create new subscriber
      const subscriber = await strapi.entityService.create('api::subscriber.subscriber', {
        data: { email },
      });

      // Send confirmation email using Resend
      await strapi.plugins['email'].services.email.send({
        to: email,
        from: 'Studio Starum <hello@starum.studio>',
        subject: 'Thank you for subscribing!',
        html: `
          <h1>Welcome!</h1>
          <p>We'll keep you updated on our launch.</p>
          <p>Best regards,</p>
          <p>Studio Starum</p>
        `,
      });

      return subscriber;
    } catch (error) {
      return ctx.badRequest('Error processing your request');
    }
  },
}; 