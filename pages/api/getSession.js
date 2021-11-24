import { getSession } from 'next-auth/react'

export default async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    res.send({
      auth: true
    })
  } else {
    res.send({
      auth: false,
      error: 'Not logged in.'
    })
  }
}
