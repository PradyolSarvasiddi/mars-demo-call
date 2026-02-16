export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone } = req.body;

  const response = await fetch('https://api.retellai.com/v1/create-call', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer key_5d43599f4a39746bf67c38136716`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      agent_id: "agent_1a72b17ce6e6a409f8178b8cc8",
      to_number: phone,
      metadata: { name }
    })
  });

  const data = await response.json();
  res.status(200).json({ success: true, data });
}
