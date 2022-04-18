const formatExtractDate = ({ date }) => {
  const dateInstance = new Date(date)

  const formattedDate = dateInstance.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric'
  }).replace(/ /g, ' ')
    .replace(/,/g, ' - ')

  return formattedDate
}

const formatPTBRDate = ({ date }) => {
  const dateInstance = new Date(date)

  const formattedDate = dateInstance.toLocaleDateString('pt-BR', {
    day: 'numeric', month: 'long'
  }).replace(/ /g, ' ')

  return formattedDate
}

export { formatExtractDate, formatPTBRDate }
