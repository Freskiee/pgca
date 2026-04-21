import { useEffect, useState } from 'react'
import { offices } from '../../data/offices'

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
            <section className="offices-section">
                <div className="pgca-container">
                    <div className="offices-collage">
                        <button
                            type="button"
                            className="offices-collage__item offices-collage__item--1"
                            onClick={() => setSelectedOffice(offices[0])}
                            aria-label={offices[0].alt}
                        >
                            <img src={offices[0].image} alt={offices[0].alt} className="offices-collage__image" />
                        </button>

                        <div className="offices-collage__text offices-collage__text--top">
                            <span>NUESTRAS</span>
                        </div>

                        <button
                            type="button"
                            className="offices-collage__item offices-collage__item--2"
                            onClick={() => setSelectedOffice(offices[1])}
                            aria-label={offices[1].alt}
                        >
                            <img src={offices[1].image} alt={offices[1].alt} className="offices-collage__image" />
                        </button>

                        <button
                            type="button"
                            className="offices-collage__item offices-collage__item--3"
                            onClick={() => setSelectedOffice(offices[2])}
                            aria-label={offices[2].alt}
                        >
                            <img src={offices[2].image} alt={offices[2].alt} className="offices-collage__image" />
                        </button>

                        <div className="offices-collage__text offices-collage__text--right">
                            <span>OFICINAS</span>
                        </div>

                        <div className="offices-collage__text offices-collage__text--left">
                            <span>TU</span>
                        </div>

                        <button
                            type="button"
                            className="offices-collage__item offices-collage__item--4"
                            onClick={() => setSelectedOffice(offices[3])}
                            aria-label={offices[3].alt}
                        >
                            <img src={offices[3].image} alt={offices[3].alt} className="offices-collage__image" />
                        </button>

                        <button
                            type="button"
                            className="offices-collage__item offices-collage__item--5"
                            onClick={() => setSelectedOffice(offices[4])}
                            aria-label={offices[4].alt}
                        >
                            <img src={offices[4].image} alt={offices[4].alt} className="offices-collage__image" />
                        </button>

                        <button
                            type="button"
                            className="offices-collage__item offices-collage__item--6"
                            onClick={() => setSelectedOffice(offices[5])}
                            aria-label={offices[5].alt}
                        >
                            <img src={offices[5].image} alt={offices[5].alt} className="offices-collage__image" />
                        </button>

                        <div className="offices-collage__text offices-collage__text--bottom">
                            <span>ESPACIO</span>
                        </div>

                        <button
                            type="button"
                            className="offices-collage__item offices-collage__item--7"
                            onClick={() => setSelectedOffice(offices[6])}
                            aria-label={offices[6].alt}
                        >
                            <img src={offices[6].image} alt={offices[6].alt} className="offices-collage__image" />
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

export default OfficesSection