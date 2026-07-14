export default defineWrappedResponseHandler(async (event) =>
  'indexCall endpoint with cookie value: ' + event.context.cookieValue
)
