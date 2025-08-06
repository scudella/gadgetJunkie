const dotenv = require('dotenv')
dotenv.config()

const Airtable = require('airtable')

const base = new Airtable({apiKey: process.env.AIRTABLE_PA_TOKEN}).base(
  process.env.AIRTABLE_BASE
)

exports.handler = async (event, context) => {
  try {
    const records = await base(process.env.AIRTABLE_TABLE)
      .select({
        maxRecords: 50,
        view: 'Grid view',
      })
      .all()

    const products = records.map((record) => {
      const {id, fields} = record
      const {
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        images,
      } = fields

      const image = images?.[0]?.url ?? null

      return {
        id,
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        image,
      }
    })

    console.log('Fetched products:', products.length)

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    console.error('Error fetching data from Airtable:', error)
    return {
      statusCode: 500,
      body: 'There was an error',
    }
  }
}
