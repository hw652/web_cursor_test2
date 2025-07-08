export default async function(req, res) {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'url query param required' });
  }
  try {
    const fetchRes = await fetch(decodeURIComponent(url));
    const data = await fetchRes.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Proxy fetch failed', detail: e.message });
  }
} 