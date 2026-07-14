import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineWrappedResponseHandler = <T extends EventHandlerRequest, D> (
  handler: EventHandler<T, D>
): EventHandler<T, D> =>
    defineEventHandler<T>(async (event) => {
      // Always defined
      // console.log('defineWrappedResponseHandler event.context.cookieValue', event.context.cookieValue);

      // Only defined if cookie exists, not defined with SSR
      // console.log('defineWrappedResponseHandler getCookie', getCookie(event, 'myCookie'));

      // TODO: url builder functionality to build url with query params and path right here
      // console.log('defineWrappedResponseHandler event', event.path)

      // const response = await handler(event)
      const response =  await proxyRequest(event, 'https://jsonplaceholder.typicode.com/todos/1', {}).catch((err: Error) => {
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not proxy Request',
          data: err
        })
      })

      return response
    })
