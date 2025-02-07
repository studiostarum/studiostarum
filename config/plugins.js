module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'resend',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'),
      },
      settings: {
        defaultFrom: 'hello@starum.studio',
        defaultReplyTo: 'hello@starum.studio',
      },
    },
  },
}); 