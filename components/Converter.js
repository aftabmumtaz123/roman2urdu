"use client";
import { useMemo, useState } from "react";
import { romanUrduConverter, urduToRoman } from "../lib/romanUrduConverter";

const examples = ["Assalam o alaikum", "Mujhe Urdu pasand hai", "Aap kaise hain?", "Mera naam Aftab hai"];
export default function Converter({ direction = "toUrdu", onDirectionChange = () => {} }) {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const output = useMemo(() => !input.trim() ? "" : direction === "toUrdu" ? romanUrduConverter(input) : urduToRoman(input), [input, direction]);
  async function copyOutput() {
    if (!output) return;
    try { await navigator.clipboard.writeText(output); }
    catch { const area = document.createElement("textarea"); area.value = output; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); }
    setCopied(true); window.setTimeout(() => setCopied(false), 1600);
  }
  function changeDirection(next) { if (next === direction) return; setInput(output); onDirectionChange(next); setCopied(false); }
  function shareOutput() {
    const text = output || input;
    if (navigator.share) navigator.share({ title: "Roman2Urdu", text }).catch(() => {});
    else copyOutput();
  }
  function shareOnWhatsApp() {
    // Share the visible converted result (not the original Roman Urdu input).
    // URLSearchParams safely encodes Urdu/Arabic characters and punctuation.
    const text = String(output || input).trim();
    if (!text) return;
    const params = new URLSearchParams();
    params.set("text", text);
    window.open(`https://api.whatsapp.com/send?${params.toString()}`, "_blank", "noopener,noreferrer");
  }
  function deleteText() {
    if (!input) return;
    setShowDeleteConfirm(true);
  }
  function confirmDeleteText() {
    setInput("");
    setCopied(false);
    setShowDeleteConfirm(false);
  }
  return <div className="converter-shell">
    {showDeleteConfirm && <div className="delete-confirm-overlay" onMouseDown={event => { if (event.target === event.currentTarget) setShowDeleteConfirm(false); }}>
      <section className="delete-confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="delete-confirm-title" aria-describedby="delete-confirm-description">
        <div className="delete-confirm-icon" aria-hidden="true">!</div>
        <h2 id="delete-confirm-title">Delete your text?</h2>
        <p id="delete-confirm-description">Are you sure you want to clear the text? This action cannot be undone.</p>
        <div className="delete-confirm-actions">
          <button type="button" className="delete-cancel-button" onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
          <button type="button" className="delete-confirm-button" onClick={confirmDeleteText}>Yes, delete</button>
        </div>
      </section>
    </div>}
    <div className="converter-toolbar"><div className="direction-switch" role="group" aria-label="Conversion direction"><button className={direction === "toUrdu" ? "direction-active" : ""} onClick={() => changeDirection("toUrdu")}>Roman Urdu <span>→</span> اردو</button><button className={direction === "toRoman" ? "direction-active" : ""} onClick={() => changeDirection("toRoman")}>اردو <span>→</span> Roman Urdu</button></div><span className="live-status"><span/> LIVE CONVERSION</span></div>
    <div className="editor-grid">
      <div className="editor-panel"><div className="editor-label"><span className="editor-label-dot"/>{direction === "toUrdu" ? "ROMAN URDU" : "URDU TEXT"}<span className="character-count">{input.length} characters</span></div><textarea value={input} onChange={e => { setInput(e.target.value); setCopied(false); }} placeholder={direction === "toUrdu" ? "Write anything in Roman Urdu..." : "یہاں اردو لکھیں..."} aria-label="Text to convert" dir={direction === "toRoman" ? "rtl" : "ltr"} spellCheck="false"/><div className="editor-footer"><span>{input.trim() ? input.trim().split(/\s+/).length : 0} words</span><div className="editor-actions"><button className="small-text-button whatsapp-text-button" onClick={shareOnWhatsApp} disabled={!input.trim() && !output}>Share on WhatsApp</button><button className="small-text-button delete-text-button" onClick={deleteText} disabled={!input}>Delete <span>×</span></button></div></div></div>
      <div className="swap-divider"><span>↔</span></div>
      <div className="editor-panel output-panel"><div className="editor-label"><span className="output-label-dot"/>{direction === "toUrdu" ? "URDU OUTPUT" : "ROMAN OUTPUT"}<span className="ready-pill">READY</span></div><div className={`output-text ${direction === "toUrdu" ? "urdu-output" : ""}`} dir={direction === "toUrdu" ? "rtl" : "ltr"} lang={direction === "toUrdu" ? "ur" : "en"} aria-live="polite">{output || <span className="output-placeholder">Your converted text will appear here...</span>}</div><div className="editor-footer"><span>{output ? `${output.length} characters` : "Waiting for text"}</span><button className="small-text-button" onClick={copyOutput} disabled={!output}>{copied ? "Copied ✓" : "Copy result ↗"}</button></div></div>
    </div>
    <div className="converter-bottom"><div className="quick-examples"><span>TRY:</span>{examples.map(example => <button key={example} onClick={() => { onDirectionChange("toUrdu"); setInput(example); setCopied(false); }}>{example}</button>)}</div><button className="share-button" onClick={shareOutput}>Share <span>↗</span></button></div>
  </div>;
}
