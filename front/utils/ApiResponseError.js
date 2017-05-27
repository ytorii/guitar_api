const notFoundMessage = ['Not Found']
const unauthorizedMessage = ['Sign in or create new account']

const createErrorMessages = (error) => {
  const errorBody = error.response.body

  let errorMessages = []

  switch(error.status){
    case 401:
      errorMessages = unauthorizedMessage
      break
    case 404:
      errorMessages = notFoundMessage
      break
    default:
      errorMessages = errorBody instanceof Array ? 
        errorBody : errorBody.errors.full_messages 
  }

  return errorMessages
}

export default class ApiResponseError extends Error {
  constructor(error){
    const messages = createErrorMessages(error)

    super(messages)
    this.name = 'ApiResponseError'
    this.messages = messages
  }
}
