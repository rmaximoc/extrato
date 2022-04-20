const getExtracts = async () => {
  try {
    const response = await fetch('api/extract')
    const { data } = await response.json()

    return data
  } catch (error) {
    console.error({
      context: 'extract call',
      message: error
    })
  }
}

export { getExtracts }
