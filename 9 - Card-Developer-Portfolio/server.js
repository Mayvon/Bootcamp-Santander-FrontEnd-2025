// Minimal CORS proxy for local dev
// Usage: node server.js  (listens on 8787)
// Request: GET /proxy?u=https%3A%2F%2Fwww.dio.me%2Fusers%2Fmayvom
import http from "node:http";
import { URL } from "node:url";

const PORT = process.env.PORT || 8787;
const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, `http://${req.headers.host}`);
  if (u.pathname !== "/proxy") {
    res.writeHead(404, corsHeaders()); res.end("Not found"); return;
  }
  const target = u.searchParams.get("u");
  if (!target) { res.writeHead(400, corsHeaders()); res.end("Missing ?u="); return; }

  try {
    const upstream = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    });
    const text = await upstream.text();
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", ...corsHeaders() });
    res.end(text);
  } catch (err) {
    res.writeHead(500, corsHeaders());
    res.end("Proxy error: " + err.message);
  }
});

function corsHeaders(){
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

server.listen(PORT, () => console.log(`[proxy] listening on http://localhost:${PORT}`));
