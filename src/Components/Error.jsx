const Error = (props) => {
  let errorMessage = ''
  if (props.error === '401') {
    errorMessage = 'You are not authorised'
  }
  if (props.error === '404') {
    errorMessage = 'Sorry, this city was not found'
  }
  return errorMessage
}
