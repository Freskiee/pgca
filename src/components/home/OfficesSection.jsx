import { useEffect, useState } from 'react'
import { offices } from '../../data/offices'

const collageOffices = [
    offices[0],
    offices[1],
    offices[2],
    offices[3],
    offices[4],
    offices[5],
    offices[6],
]

const OfficesSection = () => {
    const [selectedOffice, setSelectedOffice] = useState(null)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedOffice(null)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            <section className="offices-section" id="oficinas">
                <div className="offices-wrapper">
                    <div className="offices-collage">

                        {/* col1 / rows 1-5 — tall left card */}
                        <button
                            type="button"
                            className="offices-card offices-card--1"
                            onClick={() => setSelectedOffice(collageOffices[0])}
                            aria-label={collageOffices[0].alt}
                        >
                            <img src={collageOffices[0].image} alt={collageOffices[0].alt} />
                        </button>

                        {/* cols 2-3 / row 1 — NUESTRAS */}
                        <div className="offices-word offices-word--nuestras">
                            <span>NUESTRAS</span>
                        </div>

                        {/* cols 2-3 / row 2 — wide center-top card */}
                        <button
                            type="button"
                            className="offices-card offices-card--2"
                            onClick={() => setSelectedOffice(collageOffices[1])}
                            aria-label={collageOffices[1].alt}
                        >
                            <img src={collageOffices[1].image} alt={collageOffices[1].alt} />
                        </button>

                        {/* col4 / rows 1-2 — right upper card */}
                        <button
                            type="button"
                            className="offices-card offices-card--3"
                            onClick={() => setSelectedOffice(collageOffices[2])}
                            aria-label={collageOffices[2].alt}
                        >
                            <img src={collageOffices[2].image} alt={collageOffices[2].alt} />
                        </button>

                        {/* col5 / rows 1-2 — OFICINAS */}
                        <div className="offices-word offices-word--oficinas">
                            <span>OFICINAS</span>
                        </div>

                        {/* col1 / row 6 — TU (antes que ESPACIO en DOM para mobile) */}
                        <div className="offices-word offices-word--tu">
                            <span>TU</span>
                        </div>

                        {/* col3 / row 3 — ESPACIO */}
                        <div className="offices-word offices-word--espacio">
                            <span>ESPACIO</span>
                        </div>

                        {/* col2 / rows 3-6 — tall left-center bottom card */}
                        <button
                            type="button"
                            className="offices-card offices-card--5"
                            onClick={() => setSelectedOffice(collageOffices[4])}
                            aria-label={collageOffices[4].alt}
                        >
                            <img src={collageOffices[4].image} alt={collageOffices[4].alt} />
                        </button>

                        {/* cols 4-5 / rows 3-4 — right middle wide card */}
                        <button
                            type="button"
                            className="offices-card offices-card--4"
                            onClick={() => setSelectedOffice(collageOffices[3])}
                            aria-label={collageOffices[3].alt}
                        >
                            <img src={collageOffices[3].image} alt={collageOffices[3].alt} />
                        </button>

                        {/* col3 / row 4 — center single card */}
                        <button
                            type="button"
                            className="offices-card offices-card--6"
                            onClick={() => setSelectedOffice(collageOffices[5])}
                            aria-label={collageOffices[5].alt}
                        >
                            <img src={collageOffices[5].image} alt={collageOffices[5].alt} />
                        </button>

                        {/* cols 3-5 / rows 5-6 — big bottom card */}
                        <button
                            type="button"
                            className="offices-card offices-card--7"
                            onClick={() => setSelectedOffice(collageOffices[6])}
                            aria-label={collageOffices[6].alt}
                        >
                            <img src={collageOffices[6].image} alt={collageOffices[6].alt} />
                        </button>

                    </div>
                </div>
            </section>

            {selectedOffice && (
                <div
                    className="offices-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedOffice.alt}
                    onClick={() => setSelectedOffice(null)}
                >
                    <div
                        className="offices-lightbox__dialog"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="offices-lightbox__close"
                            onClick={() => setSelectedOffice(null)}
                            aria-label="Cerrar imagen"
                        >
                            ×
                        </button>
                        <img
                            src={selectedOffice.image}
                            alt={selectedOffice.alt}
                            className="offices-lightbox__image"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default OfficesSection;
