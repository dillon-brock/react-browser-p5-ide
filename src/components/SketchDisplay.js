export default function SketchDisplay({ code }) {
  return (
    <iframe title="sketch-display" style={{ width: '900px', height: '900px'}} srcDoc={
      `<html>
        <head>
          <script src=https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js></script>
          <script>${code}</script>
        </head>
      </html>`
    }></iframe>
  )
}