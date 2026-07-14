export default defineEventHandler(async (event) => {
  const cookie = getCookie(event, 'myCookie')

  // Get specific cookie from request headers
  // console.log('cookie in server middleware', cookie);

  // Get all cookies from request headers
  // console.log('cookie in server middleware', getRequestHeader(event, 'cookie'));

  if(cookie) {
    console.log('Cookie exists:', cookie);
    // Set the cookie value on the event context to transfer it to the API endpoint
    event.context.cookieValue = cookie;
  } else {
    console.log('Cookie does not exist');
    const defaultCookieValue = 'myCookieValue';

    // Set the cookie in the response headers
    setCookie(event, 'myCookie', defaultCookieValue, {
      httpOnly: false,
      secure: true,
      sameSite: 'lax',
    })
    
    // Set the cookie value on the event context to transfer it to the API endpoint
    event.context.cookieValue = defaultCookieValue;
  }
})
