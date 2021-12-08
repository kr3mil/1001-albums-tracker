export default function handler(req, res) {
  console.log(req)
  res.json({ auth: true })
}
