export default defineEventHandler(async (event) =>
  'Hello Nitro contactCall endpoint with cookie value: ' + event.context.cookieValue
)
