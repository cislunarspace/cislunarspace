
import { writeFileSync } from 'node:fs';

const API = 'http://lingganyaapi.com/v1/images/generations';
const KEY = process.env.GEN_API_KEY || 'sk-g64iEa64DgZQbU75HtSlMRQEeiO8bMKEi5PNKRU4Gmx9x3kj';

export async function generateImage(prompt, outfile, size = '1536x1024', quality = 'high') {
  console.log(`Submitting generation task for: ${outfile}`);
  console.log(`Prompt: ${prompt.slice(0, 100)}...`);
  
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({ model: 'gpt-image-2', prompt, n: 1, size, quality }),
  });
  
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`API submission failed: ${res.status} ${txt}`);
  }
  
  let json = await res.json();
  const pollUrl = new URL(json.query_endpoint, 'http://lingganyaapi.com').href;
  
  while (json.status !== 'completed') {
    if (json.status === 'failed') {
      throw new Error(`Task failed: ${JSON.stringify(json)}`);
    }
    await new Promise(r => setTimeout(r, 4000));
    const pr = await fetch(pollUrl, { headers: { Authorization: `Bearer ${KEY}` } });
    const pj = await pr.json();
    json = pj.status ? pj : (pj.data ?? pj);
    process.stdout.write(`  status: ${json.status} ${json.progress ?? ''}%`);
  }
  console.log(`\n  Task completed! Downloading image...`);
  
  const imgRes = await fetch(json.image_url, {
    headers: { Authorization: `Bearer ${KEY}` },
  });
  const buf = await imgRes.arrayBuffer();
  writeFileSync(outfile, Buffer.from(buf));
  console.log(`Saved to ${outfile} (${buf.byteLength} bytes)`);
}
