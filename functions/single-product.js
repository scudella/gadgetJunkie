const dotenv = require('dotenv')
dotenv.config()

const Airtable = require('airtable')

const base = new Airtable({apiKey: process.env.AIRTABLE_PA_TOKEN}).base(
  process.env.AIRTABLE_BASE
)

exports.handler = async (event, context) => {
  try {
    const {id} = event.queryStringParameters
    if (!id) {
      return {
        statusCode: 400,
        body: 'Missing product id',
      }
    }

    const record = await base(process.env.AIRTABLE_TABLE).find(id)

    const product = {id: record.id, ...record.fields}

    return {
      statusCode: 200,
      body: JSON.stringify(product),
    }
  } catch (error) {
    console.error('Error fetching record:', error)

    if (error.statusCode === 404) {
      return {
        statusCode: 404,
        body: 'Record not found',
      }
    }

    return {
      statusCode: 500,
      body: 'There was an error',
    }
  }
}
