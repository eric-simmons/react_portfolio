import { useEffect } from 'react'

// A project from the Central Scrutinizer's export (public/portfolio/projects.json): its icon, which is a
// generated sigil, an image from the project, or an emoji, and what visitors read about it.

export const PORTFOLIO = `${process.env.PUBLIC_URL}/portfolio/`

const STATUS = { active: 'in progress', paused: 'paused' }

function updatedLabel(day) {
    if (!day) return null
    const d = new Date(`${day}T00:00:00`)
    return isNaN(d) ? null : d.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
}

function linkLabel(url) {
    try {
        const host = new URL(url).hostname.replace(/^www\./, '')
        return host === 'github.com' ? 'code on GitHub' : host
    } catch {
        return 'visit'
    }
}

export function PieceIcon({ piece, size }) {
    if (piece.glyph) {
        return <span className="piece-icon piece-glyph" style={{ width: size, height: size, fontSize: size * 0.5 }}>{piece.glyph}</span>
    }
    return <img className="piece-icon" src={`${PORTFOLIO}${piece.icon}`} width={size} height={size} alt="" />
}

function Piece({ piece, onOpen }) {
    return (
        <button type="button" className="piece" onClick={() => onOpen(piece)} title={piece.blurb}>
            <PieceIcon piece={piece} size={72} />
            <span className="piece-name">{piece.id}</span>
            <span className="piece-meta">{piece.category}</span>
        </button>
    )
}

export function PieceDetail({ piece, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    const status = STATUS[piece.status]
    const updated = updatedLabel(piece.updated)
    // the export only writes http(s) links; check again, since this lands in an href
    const url = /^https?:\/\//i.test(piece.url ?? '') ? piece.url : null

    return (
        <div className="piece-backdrop" onClick={onClose}>
            <div className="piece-detail" role="dialog" aria-modal="true" aria-label={piece.id} onClick={(e) => e.stopPropagation()}>
                <button type="button" className="piece-close" onClick={onClose} aria-label="close">×</button>
                <PieceIcon piece={piece} size={112} />
                <h3>{piece.id}</h3>
                <div className="piece-meta">
                    {[piece.category, status, updated && `updated ${updated}`].filter(Boolean).join(' · ')}
                </div>
                {piece.blurb && <p>{piece.blurb}</p>}
                {piece.stack?.length > 0 && (
                    <ul className="piece-stack">
                        {piece.stack.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                )}
                {url && <a className="piece-link" href={url} target="_blank" rel="noopener noreferrer">{linkLabel(url)} ↗</a>}
            </div>
        </div>
    )
}

export default Piece
