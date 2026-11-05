"use client";

import { useMemo, useState } from "react";
import ToolPage from "../../components/ToolPage";
import { romanUrduConverter } from "../../lib/romanUrduConverter";

const themes = {
  Emerald: { bg: "#0d4737", accent: "#d5b66d" }, Night: { bg: "#101b35", accent: "#aabcf7" },
  Rose: { bg: "#7c3048", accent: "#ffd0dc" }, Sunset: { bg: "#a94f35", accent: "#ffe0a5" },
  Paper: { bg: "#f5eddb", accent: "#76563d" }, "Baby Pink": { bg: "#f5dce4", accent: "#8c4560" },
  "Baby Blue": { bg: "#dcecf7", accent: "#285d7e" }, Black: { bg: "#111111", accent: "#e7d58a" }
};
const dimensions = { story: [1080, 1920], square: [1080, 1080], post: [1080, 1350] };

function wrapCanvasText(ctx, text, maxWidth) {
  const output = [];
  for (const paragraph of String(text || "").split("\n")) {
    if (!paragraph.trim()) { output.push(""); continue; }
    let line = "";
    for (const word of paragraph.trim().split(/\s+/)) {
      // Split unusually long unspaced strings so they cannot escape the card.
      if (ctx.measureText(word).width > maxWidth) {
        if (line) { output.push(line); line = ""; }
        let part = "";
        for (const character of word) {
          const candidate = part + character;
          if (part && ctx.measureText(candidate).width > maxWidth) {
            output.push(part);
            part = character;
          } else part = candidate;
        }
        line = part;
        continue;
      }
      const candidate = line ? `${line} ${word}` : word;
      if (line && ctx.measureText(candidate).width > maxWidth) {
        output.push(line);
        line = word;
      } else line = candidate;
    }
    if (line) output.push(line);
  }
  return output;
}

function fitText(ctx, text, maxWidth, maxHeight, requestedSize, lineHeightRatio = 1.55) {
  let fontSize = requestedSize;
  let lines = [];
  while (fontSize >= 18) {
    ctx.font = `${fontSize}px "Noto Nastaliq Urdu", "Noto Naskh Arabic", serif`;
    lines = wrapCanvasText(ctx, text, maxWidth);
    const lineHeight = fontSize * lineHeightRatio;
    if (lines.length * lineHeight <= maxHeight) break;
    fontSize -= 1;
  }
  return { fontSize, lines, lineHeight: fontSize * lineHeightRatio };
}

function estimatePreviewFit(text, size, requestedSize) {
  const [width, height] = size === "story" ? [320, 568] : size === "post" ? [320, 400] : [320, 320];
  const maxWidth = width * 0.82;
  const maxHeight = height * 0.57;
  let fontSize = Math.min(requestedSize, size === "story" ? 27 : 24);
  const paragraphs = String(text || "آپ کی شاعری یہاں نظر آئے گی").split("\n");
  while (fontSize > 10) {
    const maxChars = Math.max(8, Math.floor(maxWidth / (fontSize * 0.68)));
    let lineCount = 0;
    for (const paragraph of paragraphs) {
      if (!paragraph.trim()) { lineCount += 1; continue; }
      let lineLength = 0;
      for (const word of paragraph.trim().split(/\s+/)) {
        const wordLength = [...word].length;
        if (lineLength && lineLength + 1 + wordLength > maxChars) {
          lineCount += 1;
          lineLength = wordLength;
        } else lineLength += (lineLength ? 1 : 0) + wordLength;
      }
      lineCount += 1;
    }
    if (lineCount * fontSize * 1.55 <= maxHeight) break;
    fontSize -= 1;
  }
  return Math.max(10, fontSize);
}

export default function PoetryMaker() {
  const [text, setText] = useState("");
  const [isUrdu, setIsUrdu] = useState(false);
  const [author, setAuthor] = useState("");
  const [theme, setTheme] = useState("Emerald");
  const [size, setSize] = useState("story");
  const [fontSize, setFontSize] = useState(30);
  const display = useMemo(() => isUrdu ? text : romanUrduConverter(text), [text, isUrdu]);
  // Convert Latin-script poet names too, while preserving names already typed in Urdu.
  const displayAuthor = /[\u0600-\u06FF]/.test(author) ? author : romanUrduConverter(author);
  const selectedTheme = themes[theme];
  const isStory = size === "story";
  const previewFontSize = useMemo(() => estimatePreviewFit(display, size, fontSize), [display, size, fontSize]);

  function download() {
    const canvas = document.createElement("canvas");
    const [width, height] = dimensions[size];
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = selectedTheme.bg;
    ctx.fillRect(0, 0, width, height);
    const reservedBottom = author.trim() ? height * 0.25 : height * 0.13;
    const textTop = height * 0.11;
    const textBottom = height - reservedBottom;
    const maxTextWidth = width * 0.82;
    const maxTextHeight = textBottom - textTop;
    const fitted = fitText(ctx, display || "آپ کی شاعری یہاں نظر آئے گی", maxTextWidth, maxTextHeight, fontSize * 2, 1.55);
    ctx.font = `${fitted.fontSize}px "Noto Nastaliq Urdu", "Noto Naskh Arabic", serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.direction = "rtl";
    ctx.fillStyle = theme === "Paper" || theme.startsWith("Baby") ? "#26352c" : "#ffffff";
    const blockHeight = fitted.lines.length * fitted.lineHeight;
    let y = textTop + Math.max(0, (maxTextHeight - blockHeight) / 2) + fitted.lineHeight / 2;
    for (const line of fitted.lines) {
      ctx.fillText(line, width / 2, y, maxTextWidth);
      y += fitted.lineHeight;
    }

    ctx.direction = "ltr";
    ctx.fillStyle = selectedTheme.accent;
    ctx.font = `${Math.max(30, width * 0.032)}px "Noto Nastaliq Urdu", "Noto Naskh Arabic", serif`;
    ctx.direction = "rtl";
    ctx.textBaseline = "middle";
    if (author.trim()) ctx.fillText(`— ${displayAuthor.trim()}`, width / 2, height * 0.855, width * 0.88);
    ctx.direction = "ltr";
    ctx.font = `${Math.max(16, width * 0.016)}px sans-serif`;
    ctx.fillText("roman2urdu.com", width / 2, height - 76);

    const link = document.createElement("a");
    link.download = "urdu-poetry-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  async function share() {
    if (navigator.share) {
      try { await navigator.share({ title: "Urdu Poetry", text: display }); } catch { /* user cancelled sharing */ }
    } else {
      download();
    }
  }

  return (
    <ToolPage active="/poetry-maker" kicker="CREATE & SHARE" title="Urdu Poetry & Status Maker" description="Write Urdu poetry, a quote, or your WhatsApp status on a beautiful image. Type in Roman Urdu or Urdu, choose a background, and download your design.">
      <div className="poetry-layout">
        <div className="poetry-controls">
          <div className="toggle-row">
            <button className={!isUrdu ? "selected" : ""} onClick={() => setIsUrdu(false)}>Type Roman Urdu</button>
            <button className={isUrdu ? "selected" : ""} onClick={() => setIsUrdu(true)}>Type Urdu</button>
          </div>
          <label className="field-label">Your poetry, quote or status
            <textarea dir={isUrdu ? "rtl" : "ltr"} value={text} onChange={e => setText(e.target.value)} placeholder="Write your poetry here..." />
          </label>
          <p className="field-hint">✧ {isUrdu ? "Urdu text is shown as entered." : "Converted to Urdu using the local dictionary and transliteration fallback."} Press Enter for a new line.</p>
          <label className="field-label">Poet or your name (optional)
            <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="e.g. Allama Iqbal" />
          </label>
          <div className="field-label">Background<div className="chip-row">{Object.keys(themes).map(name => <button key={name} className={theme === name ? "chip selected" : "chip"} onClick={() => setTheme(name)}>{name}</button>)}</div></div>
          <div className="field-label">Size<div className="chip-row">{[["story", "WhatsApp status / Story"], ["square", "Square post"], ["post", "Instagram / Facebook post"]].map(([value, label]) => <button key={value} className={size === value ? "chip selected" : "chip"} onClick={() => setSize(value)}>{label}</button>)}</div></div>
          <label className="field-label">Maximum text size<input className="range-input" type="range" min="18" max="48" value={fontSize} onChange={e => setFontSize(Number(e.target.value))} /><span className="range-help">Long text automatically scales down to fit the card.</span></label>
          <div className="button-row"><button className="button button-primary" onClick={download}>⇩ Download image</button><button className="button button-whatsapp" onClick={share}>↗ Share status</button></div>
        </div>
        <div className="poetry-preview-wrap">
          <div className={`poetry-preview preview-${size}`} style={{ background: selectedTheme.bg }}>
            <div className="preview-inner">
              <p className="preview-poetry-text" dir="rtl" lang="ur" style={{ fontSize: `${previewFontSize}px`, lineHeight: 1.55, color: theme === "Paper" || theme.startsWith("Baby") ? "#26352c" : "#fff" }}>{display || "آپ کی شاعری یہاں نظر آئے گی"}</p>
              {author.trim() && <span className="preview-author" dir="rtl" lang="ur" style={{ color: selectedTheme.accent }}>— {displayAuthor}</span>}
              <small>roman2urdu.com</small>
            </div>
          </div>
          <p className="preview-caption">Live preview · Text automatically fits the selected image size</p>
        </div>
      </div>
      <section className="instructions"><h2>How to make an Urdu poetry image</h2><ol><li>Type your shayari or status. Press Enter for a new line (misra).</li><li>Add the poet’s name or your own name if you like.</li><li>Choose a background and image size.</li><li>Long text scales down automatically. Tap “Download image” to save a PNG card.</li></ol></section>
      <section className="instructions"><h2>Frequently Asked Questions</h2><h3>Can I make a WhatsApp status in Urdu?</h3><p>Yes. Choose “WhatsApp status / Story” and download the image. You can then upload it to WhatsApp Status.</p><h3>What happens if I enter a lot of poetry?</h3><p>The preview keeps a fixed size and reduces the text size to help keep poetry and attribution inside the card. The downloaded image uses the same fit-to-card approach.</p><h3>Which Urdu font is used?</h3><p>The preview uses an Urdu-capable font stack, with Noto Nastaliq Urdu preferred when available.</p></section>
    </ToolPage>
  );
}
